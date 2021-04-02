class DerivateFunction {
    private static cases = [
        {
            case: 1,
            input1: 1,
            input2: 4 
        },
        {
            case: 2,
            input1: 3,
            input2: -2 
        },
        {
            case: 3,
            input1: 4,
            input2: -3 
        }
    ]


    private static solve(b: number, m: number): number {
        return b*(m**(b - 1)) 
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input 1: ${c.input1}`)
            console.log(`Input 2: ${c.input2}`)
            console.log(`Output: ${this.solve(c.input1, c.input2)}\n`)
        });
    }
}

DerivateFunction.Run()
