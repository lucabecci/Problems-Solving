class Main {
    private static cases = [
        {
            case: 1,
            input1: 3,
            input2: 7 
        },
        {
            case: 2,
            input1: 1,
            input2: 9 
        },
        {
            case: 3,
            input1: 5,
            input2:3 
        }
    ]

    private static solve(a: number, b: number): boolean{
        if ( a + 6 > b && a < b){ 
            return true
        }else{
            return false
        }
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input 1: ${c.input1}`)
            console.log(`Input 2: ${c.input2}`)
            console.log(`Output: ${this.solve(c.input1, c.input2)}`)
        });
    }
} 

Main.Run()