class TuckInArray {
    private static cases = [
        {
            case: 1,
            input1: [15, 150],
            input2: [45, 75, 35]
        },
        {
            case: 2,
            input1: [1, 10],
            input2: [2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            case: 3,
            input1: [15, 233, 442, 150],
            input2: [335, 2325, 135]
        }
    ]   

    private static solve(arr1: number[], arr2: number[]): number[]{
        arr1.splice(1, 0, ...arr2)
        return arr1
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input: 1: ${c.input1}`)
            console.log(`Input: 2: ${c.input2}`)
            console.log(`Output: ${this.solve(c.input1, c.input2)}\n`)
        });
    }
}

TuckInArray.Run()