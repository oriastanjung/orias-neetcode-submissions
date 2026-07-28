class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min = nums[0];
        for (let i = 0 ; i < nums.length; i++){
            if(nums[i] < min){
                min = nums[i]
            }
        }
        return min
    }
}
