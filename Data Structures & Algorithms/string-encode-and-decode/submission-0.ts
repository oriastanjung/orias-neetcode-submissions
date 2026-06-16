class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    delimiter = "*"
    encode(strs: string[]): string {
        let encodedString: string  = "";
        // 1) loop through the string array
        for (let i = 0; i< strs.length; i++){
            // 2) concat to encoded string by pattern (strs[i].length + delimiter + strs[i])
            encodedString += strs[i].length+this.delimiter+strs[i];
        }

        // 3) return the encoded string
        // Total Complexity is O(n)
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let start : number = 0;
        let pointer : number = 0;
        let end : number = 0;
        const result : string[] = []

        // 1) loop through the string
        while(pointer < str.length){
            // 2) find the delimiter index using indexOf(delimiter, pointer) it will search from the pointer
            let delimiterIdx = str.indexOf(this.delimiter, pointer);

            // 3) get the substringLength
            let substringLength = Number(str.substring(pointer, delimiterIdx));

            // 4) set the start and end position
            start = delimiterIdx+1;
            end = start + substringLength;

            // 5) take the string and push to result
            result.push(str.substring(start,end));

            // 6) update the pointer to end position
            pointer = end;
        }
         
         // 7) return
         // Total Complexity is O(n)
         return result;
    }
}
