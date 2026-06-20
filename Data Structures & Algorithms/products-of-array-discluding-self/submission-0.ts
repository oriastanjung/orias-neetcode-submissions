class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // This is a problems that needs pattern recognition
        /*
        nums = [1,2,4,6]
        i    =  0,1,2,3

        output = [48,24,12,6]

        [] => means skip
        output[0] ==> [1] x 2 x 4 x 6 = 48  
        output[1] ==> 1 x [2] x 4 x 6 = 24
        output[2] ==> 1 x 2 x [4] x 6 = 12
        output[3] ==> 1 x 2 x 4 x [6] = 8

        the pattern here we can see that this is one of the prefix suffix implementation

        this can be solve like creating array with same length as nums, and we calculate the prefix and suffix first then calculate total

        1) Prefix Product
        productPrefix = 1
        prefixArray = [] ==> must be in same lenght as nums array
        loop through nums
        do the calculation to fill all the prefixArray

        to avoid the O(n^2) or nested loop, we use the productPrefix as the temporary value

        so let say prefix[0] => ?? none right? -> so just store the default which is the productPrefix
        then dont forget to recalculate the productPrefix
        productPrefix *= nums[0] 

        i think we can call like this

        productPrefix of i = 0 ===> 1 
        productPrefix of i = 1 ===> 1 
        productPrefix of i = 2 ===> 2 
        productPrefix of i = 3 ===> 
        so that way, we have the pattern like if we want to calculate the prefix of index 1

        prefix[0] =  productPrefix
        to store the next prefix[1] we can multiply the productPrefix as state with the current number 

        prefix of 1 --> is 1 right?
        so actulaly when in the index 0 we already calculate the prefix 1 where its by updating the produtPrefix

        so the pattern should be like
        prefix[i] = productPrefix
        productPrefix = productPrefix * nums[i]

        let say index 0
        arrayPrefix = []
        prefix[0] = productPrefix which is ? 1
        productPrefix = productPrefix * nums[i]
                      = 1 * 1
                      = 1

        arrayPrefix = [1]
        so index 1 is
        prefix[1] = productPrefix --> 1
        productPrefix = productPrefix * nums[i] 
                      = 1 * 2
                      = 2 ---> this will be the next prefix
        arrayPrefix = [1,1]

        so index 2 is
        prefix[2] = productPrefix ===> 2
        productPrefix = productPrefix * nums[i]
                      = 2 * 4
                      = 8
        arrayPrefix = [1,1,2]

        so index 3 is
        prefix[3] = productPrefix ===> 8
        productPrefix = productPrefix *= nums[i]
                      = 8 * 6
                      = 48

        arrayPrefix = [1,1,2,8]


        then we get the arrayPrefix, we need to do the same thing into suffix, but in right to left pattern
        which mean its loop from j = nums.length - 1
        so j = 4-1 = 3

        so like this
        prodSuffix = 1
        arraySuffix = []
        so j 3 is = 
        suffix[3] = arraySuffix ===> which is 1
        arraySuffix = arraySuffix * nums[3]
                    = 1 * 6 
                    = 6
        
        arraySuffix become ==> [1]

        so j 2 is = 
        suffix[2] = arraySuffix ==> 6
        arraySuffix = arraySuffix x nums[2]
                    = 6 * 4
                    = 24

        arraySuffix become ==> [6,1]
        
        so j 1 is =
        suffix[1] = arraySuffix ===> 24
        arraySuffix = arraySuffix x nums[1]
                    = 24 * 2
                    = 48
        
        arraySuffix become ===> [24,6,1]


        so j 0 is =
        suffix[0] = arraySuffix ===> 48
        arraySuffix = arraySuffix x nums[0]
                    = 48 * 1
                    = 48
        
        arraySuffix become ===> [48,24,6,1]

        then we got two array
        prefix = [1,1,2,8]
        suffix = [48,24,6,1]

        so to get the product of index 0 is equal to prefix[0] * suffix[0] ==> 48

        product of i == prefix[i] * suffix[i]

        voilaa finishhh, lets implement this thought orias.
         */

        const arrayPrefix : number[] = Array(nums.length).fill(0)
        const arraySuffix : number[] = Array(nums.length).fill(0)
        const output : number[] = Array(nums.length).fill(0);

        // 1) create a prefix array
        let prefixProd = 1;
        for(let i = 0; i< nums.length; i++){
            arrayPrefix[i] = prefixProd;
            prefixProd = prefixProd * nums[i];
        }

        // 2) create a suffix array

        let suffixProd = 1;
        for(let j = nums.length-1; j>=0; j--){
            arraySuffix[j] = suffixProd;
            suffixProd = suffixProd * nums[j];
        }

        // 3) create the output array
        for(let k = 0; k < nums.length; k++){
            output[k] = arrayPrefix[k] * arraySuffix[k];
        }

        return output

    }
}

