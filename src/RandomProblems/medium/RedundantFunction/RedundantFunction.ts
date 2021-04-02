class RedundantFunction {
    private static cases = [
        {
            case: 1,
            input: 'apple'
        },
        {
            case: 2,
            input: 'red'
        },
        {
            case: 3,
            input: 'morfeus'
        }
    ]

    private static solve(w: string): string {
        return (() => {return w})()
    }

    public static Run(): void {
        for(let i = 0; i < this.cases.length; i++){
            console.log(`Case: ${this.cases[i].case}`)
            console.log(`Input: ${this.cases[i].input}`)
            console.log(`Output: ${this.solve(this.cases[i].input)}\n`)
        }
    }
}

RedundantFunction.Run()