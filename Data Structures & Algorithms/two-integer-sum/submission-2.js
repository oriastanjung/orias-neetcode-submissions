class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map()
        for (let i = 0; i <= nums.length-1;i++){
            const number = nums[i]
            const hasilKurang = target - number
            const indexHasilKurang = hashMap.get(hasilKurang)
    
            if(hashMap.has(hasilKurang)){
                return [i, indexHasilKurang]
            }else{
                hashMap.set(number,i)
            }
        }
        return [-1,1]
    }
}
