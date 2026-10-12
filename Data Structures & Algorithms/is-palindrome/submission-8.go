
func isPalindrome(s string) bool {
	lowerCaseString := strings.ToLower(s)
	noSpaceString := strings.ReplaceAll(lowerCaseString, " ", "")

	// Make a regex to say we only want lower + uppercase letters and numbers
	reg, err := regexp.Compile("[^a-zA-Z0-9]+")
	if err != nil {
		return false
	}
	convertedString := reg.ReplaceAllString(noSpaceString, "")

	left, right := 0, len(convertedString)-1
	for left < right {
		if convertedString[left] == convertedString[right] {
			left++
			right--
			continue
		}
		return false
	}
	return true
}
