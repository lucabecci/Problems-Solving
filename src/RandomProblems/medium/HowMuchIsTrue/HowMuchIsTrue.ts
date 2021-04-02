class HowMuchIsTrue {
    private static cases = [
        {
            case: 1,
            input: [true, false, true, false]
        },
        {
            case: 2,
            input: [false, false, false, false]
        },
        {
            case: 3,
            input: []
        }
    ]

    private static solve(arr: boolean[]): number {
        let count = 0 
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === true) {
                count++
            }else{
                continue;
            }
        }
        return count
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input: ${c.input}`)
            console.log(`Output: ${this.solve(c.input)} \n`)
        });
    }
}

HowMuchIsTrue.Run()