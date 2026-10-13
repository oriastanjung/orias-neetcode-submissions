
func isOpeningBracket(s string) bool {
	hashmapOpeningBracket := make(map[string]bool)
	hashmapOpeningBracket["{"] = true
	hashmapOpeningBracket["["] = true
	hashmapOpeningBracket["("] = true

	_, ok := hashmapOpeningBracket[s]
	if ok {
		return true
	}
	return false
}

func isClosingBracket(s string) bool {
	hashmapClosingBracket := make(map[string]bool)
	hashmapClosingBracket["}"] = true
	hashmapClosingBracket["]"] = true
	hashmapClosingBracket[")"] = true

	_, ok := hashmapClosingBracket[s]
	if ok {
		return true
	}
	return false
}

func isValid(s string) bool {
	// stack is Last In First Out
	// store only stack of the opening bracket, if its closing bracket we must pop the top position

	stack := []string{}

	closingBracketPartner := make(map[string]string)
	closingBracketPartner["}"] = "{"
	closingBracketPartner["]"] = "["
	closingBracketPartner[")"] = "("

	// loop through s
	for _, char := range s {
		checkIsValidInput := isOpeningBracket(string(char)) || isClosingBracket(string(char))
		// if not valid input (which is not a bracket) early return false
		if !checkIsValidInput {
			return false
		}

		// if stack is empty, we must directly push no matter what
		if len(stack) == 0 {
			stack = append(stack, string(char))
			continue
		}

		// if its opening bracket, we push the stack
		isOpening := isOpeningBracket(string(char))
		if isOpening {
			stack = append(stack, string(char)) //push
		} else {
			// else its closing bracket we pop the top stack
			topStack := stack[len(stack)-1]
			openBracket, ok := closingBracketPartner[string(char)]
			if !ok {
				// none closing brakcet found
				return false
			}

			if topStack == openBracket {
				popedValue, newStack := stack[len(stack)-1], stack[:len(stack)-1]
				stack = newStack
				fmt.Println(fmt.Sprintf("Popped Value : %s", popedValue))
				continue
			}
			// if topstack is not a open bracket do push directly
			stack = append(stack, string(char))
		}

	}

	// return true only if the stack is empty
	if len(stack) == 0 {
		return true
	}
	return false
}
