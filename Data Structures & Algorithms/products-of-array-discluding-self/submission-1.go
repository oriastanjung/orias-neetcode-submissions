import "slices"
func productExceptSelf(nums []int) []int {
	// index 0  = index 1 * index 2 * .... index len-1

	// BRUTE FORCE METHOD:
	// result := []int{}

	// for i := range nums {
	// 	productExceptI := 1
	// 	for j := 0; j < len(nums); j++ {
	// 		if j == i {
	// 			continue
	// 		}
	// 		productExceptI *= nums[j]
	// 	}
	// 	result = append(result, productExceptI)
	// }

	// return result

	// more better approach
	// prefix * suffix
	prefix := []int{}
	// loop first the prefix
	runningProduct := 1
	for i := 0; i < len(nums); i++ {
		prefix = append(prefix, runningProduct)
		runningProduct *= nums[i]
	}
	suffix := []int{}
	runningProduct = 1
	for j := len(nums) - 1; j >= 0; j-- {
		suffix = append(suffix, runningProduct)
		runningProduct *= nums[j]
	}
	slices.Reverse(suffix)

	result := []int{}
	for i := 0; i < len(nums); i++ {
		result = append(result, prefix[i]*suffix[i])
	}
	return result
}
