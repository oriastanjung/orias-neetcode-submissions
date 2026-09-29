func hasDuplicate(nums []int) bool {
    // hashmap {value: frequency}
	hashmap := make(map[int]int)

	for _, value := range nums {
		if valueMapSelected, ok := hashmap[value]; ok {
			if valueMapSelected+1 >= 2 {
				return true
			}
			hashmap[value] = valueMapSelected + 1
			continue
		}
		hashmap[value] = 1
	}

	return false
}
