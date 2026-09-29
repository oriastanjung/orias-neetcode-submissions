
func twoSum(nums []int, target int) []int {
	// hashmap of {value: positionIndex}

	hashmap := make(map[int]int)

	for i, value := range nums {
		complementary := target - value

		if valueSelectedMap, ok := hashmap[complementary]; ok {
			return []int{valueSelectedMap, i}
		}
		hashmap[value] = i
	}
	return []int{}
}
