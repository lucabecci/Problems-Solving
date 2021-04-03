class NestedArray {
    private static cases = [
        {
            case: 1,
            input1: [1, 2, 3, 4],
            input2: [0, 6]
        },
        {
            case: 2,
            input1: [3, 1],
            input2: [4, 0]
        },
        {
            case: 1,
            input1: [9, 9, 8],
            input2: [8, 9]
        }
    ]

    private static solve(arr1: number[], arr2: number[]): boolean{
        const min1 = Math.min(...arr1)
        const min2 = Math.min(...arr2)
        const max1 = Math.max(...arr1)
        const max2 = Math.max(...arr2)
        
        if(min1 > min2 && max1 < max2){
            return true
        }
        return false
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input 1: ${c.input1}`)
            console.log(`Input 2: ${c.input2}`)
            console.log(`Output: ${this.solve(c.input1, c.input2)}`)
            console.log(`\n`)
        });
    }
}

NestedArray.Run()
