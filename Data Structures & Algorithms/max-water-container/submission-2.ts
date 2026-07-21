class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    calculateArea(indexA: number, indexB: number, numA : number, numB: number){
        return Math.min(numA, numB) * (Math.abs(indexA-indexB))
    }
    maxArea(heights: number[]): number {
        let left = 0
        let right = heights.length - 1

        let total = []
        while(left < right){
            const area = this.calculateArea(left, right, heights[left], heights[right])
            total.push(area)
            
            if (heights[left] < heights[right]){
                left++
            }else{
                right--
            }
        }

        return Math.max(...total)
    }
}
