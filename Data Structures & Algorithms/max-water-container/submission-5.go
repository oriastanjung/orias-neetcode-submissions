import "slices"

func helperCalculateArea(leftIndex int, rightIndex int, heights []int) int {
	width := rightIndex - leftIndex
	height := min(heights[leftIndex], heights[rightIndex])

	return width * height
}

func maxArea(heights []int) int {
	left, right := 0, len(heights)-1
	result := []int{}

	for left < right {
		area := helperCalculateArea(left, right, heights)
		result = append(result, area)
		if heights[left] <= heights[right] {
			left++
		} else if heights[left] > heights[right] {
			right--
		}
	}
	max := slices.Max(result)

	return max
}
