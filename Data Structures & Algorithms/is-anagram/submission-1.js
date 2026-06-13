class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const counterS = {}
        const counterT = {}

        for (let i = 0; i <= s.length -1 ; i++){
            counterS[s[i]] = 1+ (counterS[s[i]] || 0)
            counterT[t[i]] = 1+ (counterT[t[i]] || 0)
        }

        for (const key in counterS){
            if(counterS[key] !== counterT[key]){
                return false
            }
        }
        return true
    }
}
