class TimeMap {
    keyStore: Map<string, [number, string][]> = new Map<string, [number,string][]>();
    constructor() {
        this.keyStore = new Map<string, [number, string][]>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    /* 
    { key : [[timestamp, value]]}
    {
        "alice" :  [[1, happy], [3, sad]] // sorted due to timestamp always increasing
    }*/
    set(key: string, value: string, timestamp: number): void {
        // Target O(1)
        if(this.keyStore.has(key)){
            let currentValue = this.keyStore.get(key)
            currentValue.push([timestamp, value])
            this.keyStore.set(key, currentValue)
        }else{
            this.keyStore.set(key, [[timestamp, value]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        // Target O( log n) // Binary Search
        if (!this.keyStore.get(key)) return ""
        const keyTarget = this.keyStore.get(key) as [number, string][]
        // [[1, happy], [3, sad]]
        // binary search
        let left = 0;
        let right = keyTarget.length-1;
        let result = ""
        while (left <= right){
            const mid = Math.floor((left + right)/2);
            if(keyTarget[mid][0] === timestamp ){
                return keyTarget[mid][1]
            }
            if (keyTarget[mid][0] <= timestamp){
                result = keyTarget[mid][1];
                left = mid + 1
            }
            if (keyTarget[mid][0] > timestamp){
                right = mid -1
            }
        }
        return result

    }
}
