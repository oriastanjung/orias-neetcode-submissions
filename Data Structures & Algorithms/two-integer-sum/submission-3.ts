class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result : number[] = [];
        const hashmap: Map<number,number> = new Map();

        // 1) loop through the array nums
        for (let i = 0; i < nums.length; i++){
            // 2) test target - num = substract
            let substract = target - nums[i];
            // 3) check if the substract exist in the hashmap or not
            if (hashmap.has(substract)){
                result.push(i);
                result.push(hashmap.get(substract));
                break;
            }else{
                // 4) if its doesnt exist, we store in the hashmap
                hashmap.set(nums[i],i)
            }
        }
        // 5) sort the result array
        const sortedResult = result.sort((a,b) => a-b)
        return sortedResult;
    }

}
