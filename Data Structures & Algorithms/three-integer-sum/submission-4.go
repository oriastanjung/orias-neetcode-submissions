import "slices"

func threeSum(nums []int) [][]int {
	result := [][]int{}
	// to make this works with the two pointer it has to be sorted first
	slices.Sort(nums)

	for i := 0; i < len(nums); i++ {
		// dedup for value a
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		a := nums[i]
		left, right := i+1, len(nums)-1

		for left < right {
			total := a + nums[left] + nums[right]
			if total == 0 {
				result = append(result, []int{a, nums[left], nums[right]})
				left++
				right--

				// dedup left and right
				for left < right && nums[left] == nums[left-1] {
					left++
				}
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			} else if total > 0 {
				right--
			} else if total < 0 {
				left++
			}
		}

	}

	return result
}
