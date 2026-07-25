class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    calculateTimeArrive(target:number, position:number, speed:number){
        // Based on science the formula is time = (target-position)/speed
        return (target-position)/speed
    }
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack : number[] = [];
        // since the car couldnt pass another car, we must sort the closest to the target first based on its position
        // we need to create the pair first where its pair is [position, speed] -> we cant do 2 sort due to it will be selecting different number
        
        // pairs ===> [[position, speed]] in sorted from largest (closest to target)
        const pairs : number[][] = position.map((val,idx) => [val, speed[idx]])
        pairs.sort((a,b) => b[0] - a[0])

        // loop trough the position
        for(let i = 0; i < pairs.length; i++){
            // check the current time arrive and the top stack 
            const top = stack[stack.length-1];
            const speed = pairs[i][1];
            const position = pairs[i][0];
            const current = this.calculateTimeArrive(target, position, speed);
            // if none top, directly push to stack
            if(stack.length === 0){
                stack.push(current);
                continue;
            }

            if(current <= top){
                continue;
            }

            stack.push(current);
        }

        // return the count of fleets, which the stack it self
        return stack.length
    }
}
