class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let result: boolean = false;
        const hashmap: Map<number, number> = new Map();

        // loop and then set the count of the item
        for(let i = 0; i < nums.length; i++){
            // store the num[i] as map[key] where the value is the value++ if it exist in the hashmap
            if(hashmap.has(nums[i])){
                hashmap.set(nums[i], hashmap.get(nums[i])+1);
            }
            // else just put the value as nums[i] where the value is 1
            else{
                hashmap.set(nums[i], 1);
            }
        }        

        // loop through the hashmap and check the value
        hashmap.forEach((value: number, key: number) => {
            // check the value if its > 1 set result as true and break
            if(value > 1){
                result = true;
            }
            // else, lets skip it
        })

        return result;
    }
}
