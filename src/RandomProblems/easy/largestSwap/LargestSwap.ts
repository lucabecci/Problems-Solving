class LargestSwap {
    private static cases: number[] = [24, 72, 88, 91, 87]

    private static revert(n: number): number {
        let num = n.toString()
        let mod = num.split("").reverse().join("")
        return parseInt(mod)
    }
    private static solve(n: number): boolean {
        const reverted = this.revert(n)
        if (reverted < n){
            return true
        }
        return false   
    }

    public static Run(): void { 
        for(let i = 0; i < this.cases.length; i++){
            console.log(`Case: ${i+1}`)
            console.log(`Input: ${this.cases[i]}`)
            console.log(`Output: ${this.solve(this.cases[i])} \n`)
        }
    }
}


LargestSwap.Run()
