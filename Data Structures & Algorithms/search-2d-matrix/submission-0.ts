class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let left:number = 0;
        let right:number = matrix.length-1;
        let found: boolean = false;

        while(left <= right){
            const mid: number = Math.floor((left+right)/2)
            const arrayMid = matrix[mid];
            
            if (arrayMid[0] <= target && arrayMid[arrayMid.length-1] >= target){
                // nested binary search here
                let leftNest : number = 0;
                let rightNest : number = arrayMid.length-1;
                while(leftNest <= rightNest){
                    const midNest = Math.floor((leftNest + rightNest)/2);
                    if(arrayMid[midNest] === target){
                        return true;
                    }

                    if(arrayMid[midNest] < target){
                        leftNest = midNest + 1
                    }

                    if(arrayMid[midNest] > target){
                        rightNest = midNest -1
                    }
                }

            }

            if(arrayMid[0] < target){
                left = mid + 1;
            }
            if (arrayMid[arrayMid.length-1] > target){
                right = mid - 1;
            }
        }

        return found
    }
}
