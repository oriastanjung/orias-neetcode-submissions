class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        // 1) sort
        const sortedPiles : number[] = piles.sort((a,b) => a-b)
        const min = 1;
        const max = sortedPiles[sortedPiles.length-1]
        

        // 2) Binary Search
        let left = min;
        let right = max;
    
        const result:number[] = []

        while(left <= right){
            let mid = Math.floor((left+right)/2);

            // loop through all the piles 
            let totalHour = 0;
            for (let i = 0; i < piles.length; i++){
                const bananas = piles[i];
                const hourRequired = Math.ceil(bananas/mid)
                totalHour += hourRequired
            }

            // binary search comes here
            if(totalHour <= h){
                result.push(mid)
                right = mid -1;
            }

            // if its larger then move the left
            if(totalHour > h){
                left = mid + 1;
            }
        }

        return Math.min(...result)
    }
}
