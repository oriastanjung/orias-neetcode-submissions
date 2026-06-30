class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (s.length <= 1){
            return true;
        }

        // cast to lowercase, and strip all the symbols
        let convertedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

        let leftPosition : number = 0;
        let rightPosition : number = convertedString.length - 1;
        let isPalindrome : boolean = true;

        
        while(leftPosition < rightPosition){
            if(convertedString[leftPosition] !== convertedString[rightPosition]){
                isPalindrome = false;
                break;
            }
            // always do this in concept of the two pointers
            leftPosition++;
            rightPosition--;
        }

        return isPalindrome; 
    }
}
