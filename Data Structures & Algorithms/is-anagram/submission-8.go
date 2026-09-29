func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	// hashmap store all the frequency from the s and the t hashmap is have the exact frequency
	hashmapS := make(map[string]int)
	hashmapT := make(map[string]int)

	// loop the string and put the frequency value first for both s and t
	// s string first
	for _, value := range s {
		if valueMapSelected, ok := hashmapS[string(value)]; ok {
			hashmapS[string(value)] = valueMapSelected + 1
			continue
		}
		hashmapS[string(value)] = 1
	}

	// t string we can also make it like this
	for _, value := range t {
		hashmapT[string(value)]++
	}

	// loop one of the hashmap and compare each key and the value

	// loop through hashmapS
	for keyS, valueS := range hashmapS {
		valueT, ok := hashmapT[keyS]
		if !ok {
			return false
		}
		if valueS != valueT {
			return false
		}
	}
	// if all frequency and all keys exact match its mean the s and t is anagram
	return true
}