
func topKFrequent(nums []int, k int) []int {
	// list all the output into result that the frequency is the maximum, then took the top k
	// hashmap {value: frequency}
	hashmap := make(map[int]int)
	for _, value := range nums {
		if _, ok := hashmap[value]; ok {
			hashmap[value] = hashmap[value] + 1
			continue
		}
		hashmap[value] = 1
	}

	// convert to struct so we can easily sort by freq later on
	type pair struct {
		val, freq int
	}

	pairs := []pair{}

	for key, frequency := range hashmap {
		pairs = append(pairs, pair{key, frequency})
	}

	// sort the pairs by its frequency then take top k topKFrequent
	sort.Slice(pairs, func(i, j int) bool {
		return pairs[i].freq > pairs[j].freq
	})

	result := []int{}
	// take top k frequent
	for i := 0; i < k; i++ {
		result = append(result, pairs[i].val)
	}
	return result
}