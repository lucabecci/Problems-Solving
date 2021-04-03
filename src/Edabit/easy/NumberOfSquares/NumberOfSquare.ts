class NumberOfSquare {
    private static cases = [
        {
            case: 1,
            input: 5
        },
        {
            case: 2,
            input: 2
        },
        {
            case: 3,
            input: 4
        }
    ]
 
    private static solve(n: number): number {
        return ((n*(n+1)*(2*n+1))/6)
    }
    
    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input: ${c.input}`)
            console.log(`Output: ${this.solve(c.input)} \n`)
        });
    }
}


NumberOfSquare.Run()