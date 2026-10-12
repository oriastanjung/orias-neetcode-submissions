
func longestConsecutive(nums []int) int {
	// hashmap
	hashmap := make(map[int]bool)

	// convert array to hashmap so it will be easy to find
	for _, value := range nums {
		hashmap[value] = true
	}

	// find the starting number
	var startingSequence []int
	for key, _ := range hashmap {
		_, ok := hashmap[key-1]
		if !ok {
			startingSequence = append(startingSequence, key)
			continue
		}
		// else just skip since its not a starting sequence
		continue
	}

	// loop from startingSequence to maxNumber
	longestConsecutive := 0
	for i := 0; i < len(startingSequence); i++ {
		selectedStartingSequence := startingSequence[i]
		tempCounter := 1
		currentNumber := selectedStartingSequence
		for true {
			_, ok := hashmap[currentNumber+1]
			if ok {
				tempCounter += 1
				currentNumber += 1
				continue
			}
			// if not found then its mean we should break for finding the next number since its doesnt exist
			if tempCounter > longestConsecutive {
				longestConsecutive = tempCounter
				break
			}

			break

		}
	}
	return longestConsecutive
}
