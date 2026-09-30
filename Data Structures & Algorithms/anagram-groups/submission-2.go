import "slices"
// sort string
func sortStr(str string) string {
	// convert string as rune type --> same thing as chars[]
	// use slices to sort the array
	// then onvert back to string
	r := []rune(str)
	slices.Sort(r)
	return string(r)
}

func groupAnagrams(strs []string) [][]string {
	// its a hash table
	hashtable := make(map[string][]string)

	// loop
	for _, value := range strs {
		sortedString := sortStr(value)
		if _, ok := hashtable[sortedString]; ok {
			hashtable[sortedString] = append(hashtable[sortedString], value)
			continue
		}
		hashtable[sortedString] = []string{value}
	}

	// for each key and values
	result := [][]string{}

	for _, value := range hashtable {
		result = append(result, value)
	}
	return result
}
