class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    isOperations(token : string): boolean {
        return "+-/*".includes(token)
    }
    evalRPN(tokens: string[]): number {
        const stack : string[] = []
        for (let i = 0; i < tokens.length; i++){
            if(!this.isOperations(tokens[i])){
                stack.push(tokens[i]);
            }

            else if(this.isOperations(tokens[i])){
                const secondNumber = stack.pop()
                const firstNumber = stack.pop()
                let counter = 0
                if(tokens[i] === "+"){
                    counter = Number(Number(firstNumber)+Number(secondNumber)) 
                }
                if (tokens[i] === "-"){
                    counter = Number(Number(firstNumber)-Number(secondNumber)) 
                }
                if (tokens[i] === "/"){
                    counter = Math.trunc(Number(firstNumber) / Number(secondNumber))
                }
                if (tokens[i] === "*"){
                    counter = Number(Number(firstNumber)*Number(secondNumber)) 
                }
                stack.push(String(counter))
            }
        }

        return Number(stack[stack.length-1]);
    } 
}
