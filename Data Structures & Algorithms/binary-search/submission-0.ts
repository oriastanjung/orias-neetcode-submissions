class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // this is a template BS
        let left : number = 0;
        let right: number = nums.length-1;
        let found: Boolean = false;

        while(left <= right){
            const mid : number =  Math.floor((left+right)/2);

            if (nums[mid] === target){
                return mid;
            }

            if (nums[mid] < target){
                left = mid + 1;
            }

            if (nums[mid] > target) {
                right = mid - 1;
            }
        }
        
        if (!found){
            return -1
        }
    }
}
