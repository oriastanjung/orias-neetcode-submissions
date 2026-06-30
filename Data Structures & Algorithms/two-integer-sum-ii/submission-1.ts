class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // if the sum > target , we do move right pointer by right--
        // if the sum < target, we do move left pointer by leftt++

        const output : number[] = [];
        let left : number = 0;
        let right : number = numbers.length - 1;

        while (left<right){
            let sum = numbers[left] + numbers[right];
            if(sum === target){
                output.push(left + 1);
                output.push(right + 1);
                break;
            }
            if(sum > target){
                right--;
            }
            if(sum < target){
                left++;
            }
        }
        return output;
    }
}
