class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // stack FIFO 
    // push and pop
    isValid(s: string): boolean {
        if (s.length == 1){
            return false;
        }

        if(s.length % 2 !== 0){
            return false;
        }
        const openPair = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        }

        const closePair = {
            "}" : "{",
            "]" : "[",
            ")" : "(",
        }
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++){
            console.log("stack >> ", stack)
            if(openPair[s[i]]){
                stack.push(s[i])
            }
            else if (closePair[s[i]]){
                const currentValue = stack[stack.length-1];
                if (closePair[s[i]] === currentValue){
                    stack.pop()
                }
                else{
                    return false
                }
            }
        }


        return stack.length === 0 ? true : false

    }
}
