class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0, right = nums.length-1;
        
        // find pivot
        while(left < right){
            const mid = Math.floor((left+right)/2);
            if(nums[mid] > nums[right]){
                left = mid + 1
            }else{
                right = mid
            }
        }

        let pivotIndex = left;
        console.log("Pivot Index >>> ", pivotIndex)
        const sortedArray = [...(nums.slice(pivotIndex, nums.length)), ...(nums.slice(0, pivotIndex))]
        console.log("Sorted Array >> ", sortedArray)
        // find the target 
        left = 0;
        right = sortedArray.length-1;
        let found = false

        while(left <= right){
            const mid = Math.floor((left + right)/2)
            if (sortedArray[mid] === target){
                return (mid + pivotIndex) % sortedArray.length
            }

            if(sortedArray[mid] < target){
                left = mid + 1
            }

            if (sortedArray[mid] > target){
                right = mid -1
            }
        }

        if(!found){
            return -1
        }
    }
}
