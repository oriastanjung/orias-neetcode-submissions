type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	var output string
	for _, value := range strs {
		// find its length first
		lenString := len(value)
		// add the delimiter '#'
		concatString := fmt.Sprintf("%d#%s", lenString, value)
		output += concatString
	}
	return output
}

func (s *Solution) Decode(encoded string) []string {
	pointer := 0
	result := []string{}

	for pointer < len(encoded) {
		// 1) cari posisi '#' mulai dari pointer
		delimIdx := strings.Index(encoded[pointer:], "#") + pointer

		// 2) ambil angka sebelum '#'
		length, _ := strconv.Atoi(encoded[pointer:delimIdx])

		// 3) ambil string sebanyak length setelah '#'
		start := delimIdx + 1
		end := start + length
		result = append(result, encoded[start:end])

		// 4) geser pointer ke end
		pointer = end
	}

	return result
}
