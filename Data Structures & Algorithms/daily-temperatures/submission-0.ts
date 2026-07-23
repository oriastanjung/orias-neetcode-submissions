class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const output = []
        for (let i = 0; i < temperatures.length; i++) {
            let found = false;
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    output.push(j - i);
                    found = true;
                    break;
                }
            }
            if (!found) {
                output.push(0);
            }
        }

        return output;
    }
}
