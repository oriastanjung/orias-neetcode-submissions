class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashSet = new Set()
        for (const number of nums){
            if (hashSet.has(number)){
                return true
            }
            hashSet.add(number)
        }

        return false
    }
}
