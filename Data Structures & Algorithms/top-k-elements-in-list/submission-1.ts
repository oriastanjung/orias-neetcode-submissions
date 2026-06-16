class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let result : number[] = [];
        const hashmap: Map<number, number> = new Map();
        // 1) store array into hashmap O(n)
        for (let i = 0; i < nums.length; i++){
            if(hashmap.has(nums[i])){
                hashmap.set(nums[i], hashmap.get(nums[i])+1);
            }else{
                hashmap.set(nums[i], 1);
            }
        }
        const sortedArray : number[][] = [];
        //2) loop in the hashmap and then convert it to array 2d so it can be sort by javascript .sort()
        // 2d array in format of [key, value] O(n)
        hashmap.forEach((value:number, key:number)=>{
            sortedArray.push([key, value]);
        })

        // 3) use sort by the value by taking the index of 1 (O(n log n))
        sortedArray.sort((a,b) => b[1] - a[1]); // largest first

        // 4) take the key (index 0) of k number (O(n))
        for (let i = 0; i < k; i++){
            result.push(sortedArray[i][0]);
        }

        // Complexity is O(n log n)
        return result;
    }
}
