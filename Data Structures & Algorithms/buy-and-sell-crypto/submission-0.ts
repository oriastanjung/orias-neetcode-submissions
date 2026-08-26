class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // brute force way
        let highestProfit = 0;
        for (let i = 0; i < prices.length; i++){
            let buyPrice = prices[i];
            let currentProfit = 0;
            for (let j = i+1; j < prices.length; j++){
                let sellPrice = prices[j];
                if (sellPrice > buyPrice){
                    const profit = sellPrice - buyPrice
                    if (profit > currentProfit){
                        currentProfit = profit;
                    }
                }
            }

            if (currentProfit > highestProfit){
                highestProfit = currentProfit;
            }
        }
        return highestProfit
    }
}
