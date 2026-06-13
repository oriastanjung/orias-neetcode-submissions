class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    storeStringAsHashmap(str:string):Map<string,number> {
        // convert string as array
        const arr : string[] = str.split(""); 
        const hashmap: Map<string, number> = new Map();

        // loop through array
        arr.map((item) => {
            // if its exist update the value
            if(hashmap.has(item)){
                hashmap.set(item, hashmap.get(item) + 1);
            }
            else{
                hashmap.set(item, 1);
            }
        })
        // return hashmap
        return hashmap;
    }

    isAnagram(s: string, t: string): boolean {
        // quick return false if the s length != t length
        if(s.length !== t.length){
            return false;
        }

        let isAnagram: boolean = true;
        // 1) lets put s string as hashmap1 and t string as hashmap2
        const hashmap1: Map<string, number> = this.storeStringAsHashmap(s);
        const hashmap2: Map<string, number> = this.storeStringAsHashmap(t);
        
        // 2) loop through the any hashmap and check if the key is dont exist in other hashmap then set the result as false, other then keep the result is true
        // i will use hashmap2 and compare the key with hashmap1
        hashmap2.forEach((value:number, key:string) => {
            // check if it doesnt exist in hashmap1
            if(!hashmap1.has(key)){
                isAnagram = false;
            }
            
            // check by its value too
            if(value !== hashmap1.get(key)){
                isAnagram = false;
            }
        })

        return isAnagram;
    }
}
