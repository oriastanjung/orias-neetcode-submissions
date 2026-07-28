class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let lowest = 0;
        let highest = nums.length-1
        let pivotPosition = 0

        // binary search can be used to finding a position or boundary usage
        // by using lowest < highest
        // if the mid > highest, then its mean move the left to mid + 1
        // else then right = mid
        while (lowest < highest){
            let mid = Math.floor((lowest+highest)/2)

            if (nums[mid] > nums[highest]){
                lowest = mid + 1
            }
            else{
                highest = mid
            }
        }

        pivotPosition = lowest;

        const sortedArray = [...(nums.slice(pivotPosition, nums.length)), ...(nums.slice(0,pivotPosition))]

        return sortedArray[0]

    }
}
