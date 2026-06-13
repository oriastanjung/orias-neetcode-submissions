class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    alphaNum(char){
        const charCode = char.charCodeAt(0)
        return(
            (65 <= charCode && charCode <= 90) ||
            (97 <= charCode && charCode <= 122) ||
            (48 <= charCode && charCode <= 57)
        )
    }

    isPalindrome(s) {
        const strings = String(s).toLowerCase()
        let indexForward = 0
        let indexBackward = strings.length-1
        while(indexForward < indexBackward){
            while(!this.alphaNum(strings[indexForward]) && indexForward < indexBackward){
                indexForward++
            }
            while(!this.alphaNum(strings[indexBackward]) && indexForward < indexBackward){
                indexBackward--
            }
            if(strings[indexForward] !== strings[indexBackward]){
                return false
            }
            indexForward++
            indexBackward--
        }
        return true
    }
}
