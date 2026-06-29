class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length <1){
            return 0;
        }
        
        // 1) put into hashmap so we can search quickly
        const hashmap : Map<number,boolean> = new Map();
        for (let i= 0;i <nums.length;i++){
            hashmap.set(nums[i],true);
        }

        // 2) Find the Starting Sequence
        const startingSequence : number[] = []

        // starting sequence is the number that dont have their previous number in the hashmap

        for (let j = 0; j<nums.length;j++){
            if(!hashmap.has(nums[j]-1)){
               startingSequence.push(nums[j]);
            }
        }

        // 3) Calculate the Length of sequence by checking if the next value of the current number exist or not in thr hashmap
        
        const outputs = [];
        
        for (let k=0; k< startingSequence.length;k++){
            let currentNumber= startingSequence[k];
            let tempSum = 1;
            while(true){
                if(hashmap.has(currentNumber +1)){
                    tempSum += 1;
                    currentNumber += 1;
                }else{
                    outputs.push(tempSum);
                    break;
                }
            }
        }

        // 4) return the max sum from outputs
        return Math.max(...outputs);
    }
}
