
func isOperator(s string) (bool, string) {
	hashmap := make(map[string]string)
	hashmap["+"] = "plus"
	hashmap["-"] = "minus"
	hashmap["/"] = "division"
	hashmap["*"] = "multiply"

	value, ok := hashmap[s]
	if !ok {
		return false, ""
	}
	return true, value
}

func doOperation(number1 string, number2 string, operationType string) string {
	a, _ := strconv.Atoi(number1)
	b, _ := strconv.Atoi(number2)
	if operationType == "minus" {
		return strconv.Itoa(a - b)
	} else if operationType == "plus" {
		return strconv.Itoa(a + b)
	} else if operationType == "division" {
		return strconv.Itoa(a / b)
	} else if operationType == "multiply" {
		return strconv.Itoa(a * b)
	} else {
		return "0"
	}

}

func evalRPN(tokens []string) int {
	// if its a operator then we should combine 2 last top number in the stack into 1 after operation
	stack := []string{}
	for _, item := range tokens {
		isItemOperator, operationType := isOperator(item)
		// if item is not an operation, directly push to stack
		if !isItemOperator {
			stack = append(stack, item)
		} else {
			// minimal 2x pop so we can get the number 1 and number 2
			number2 := stack[len(stack)-1]
			number1 := stack[len(stack)-2]

			// pop here
			stack = stack[:len(stack)-2]

			// calculate here
			result := doOperation(number1, number2, operationType)
			stack = append(stack, result)
		}
	}
	fmt.Println("Final Stack", stack)
	finalResult, _ := strconv.Atoi(stack[0])
	return finalResult
}
