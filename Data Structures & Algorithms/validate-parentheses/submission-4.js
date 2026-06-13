class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const map = {
            "}" : "{",
            ")" : "(",
            "]" : "["
        }

        for (const karakter of s){
            const karakterMerupakanPenutup = karakter in map
            if(!karakterMerupakanPenutup){
                stack.push(karakter)
                continue
            }

            const karaketerPenutupSesuaiUntukStack = stack[stack.length -1] === map[karakter]
            if(karaketerPenutupSesuaiUntukStack){
                stack.pop()
                continue
            }
        return false
        }
return stack.length === 0
}
        

}