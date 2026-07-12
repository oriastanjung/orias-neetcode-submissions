class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // 1) precondition
        if(nums.length < 3){
            return [];
        }

        // 2) sort it
        const sortedNumber: number[] = nums.sort((a,b) => a-b);
        // 3) use the two pointer (since its already sorted) inside loop for first number

        // formula is : x0 + x1 + x2 === 0
        // x1 + x2 --> need to find using the two pointer algorithm
        // x1 == left = x0 index + 1
        // x2 === sortedNumber.length-1

        const output : number[][] = [];
        // 4) loop
        for (let i = 0; i < sortedNumber.length; i++){
            // pre check dedup
            if (i > 0 && sortedNumber[i-1] === sortedNumber[i]){
                continue;
            }

            // x0 = sortedNumber[i]
            const x0 = sortedNumber[i]
            let left = i+1; 
            let right = sortedNumber.length - 1;

            // find the pair for this x0
            while (left < right){
                // sum = x0 + x1 + x2 
                const x1 = sortedNumber[left];
                const x2 = sortedNumber[right];
                const sum = x0 + x1 + x2;
                if (sum === 0){
                    // push to the output
                    output.push([x0,x1,x2]);
                    // dont forget move the two pointer to avoid TLE
                    right--;
                    left++;
                    // dedup
                    while (left < right && sortedNumber[left] === sortedNumber[left-1]) left++;
                    while (left < right && sortedNumber[right] === sortedNumber[right+1]) right--;
                }else if (sum > 0){
                    // its means the right index must be move  
                    right--;
                }else if(sum < 0){
                    left++;
                }
            }
        }  

        return output;
    }
}
