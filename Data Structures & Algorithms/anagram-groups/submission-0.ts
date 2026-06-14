class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashmap : Map<string, string[]> = new Map();
        //1) loop trough all the strings
        for (let i = 0; i<strs.length; i++){
            // 2) set the key
            let key:string = strs[i].split("").sort().join("");
            // 3) set the value
            if (hashmap.has(key)){
                let values : string[] = hashmap.get(key);
                values.push(strs[i]);
                hashmap.set(key, values);
            }else{
                hashmap.set(key, [strs[i]]);
            }
        }

        // return it in array 2D
        const result = []
        hashmap.forEach((value) => {
            result.push(value);
        })

        return result;
    }
}
