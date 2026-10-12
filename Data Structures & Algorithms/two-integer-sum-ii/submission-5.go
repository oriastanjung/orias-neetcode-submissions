func twoSum(numbers []int, target int) []int {
	// notice that this already sorted.. so we can go implement with two pointer
	left, right := 0, len(numbers)-1
	result := []int{}
	for left < right {
		sum := numbers[left] + numbers[right]
		if sum == target {
			result = append(result, left+1, right+1)
			break
		}

		if sum > target {
			right--
			continue
		}
		if sum < target {
			left++
			continue
		}
	}
	return result
}

