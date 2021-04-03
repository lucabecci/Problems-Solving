class NextNumberPassed{
    static cases = [
        {
            case: 1,
            input: 744
        },
        {
            case: 2,
            input: 4
        },
        {
            case: 3,
            input: 10002
        }
    ]

    private static convert(n: number): number {
        const converted = n + 1
        return converted
    }

    public static Run(){
        for(let i = 0; i < this.cases.length; i++){
            console.log(`Case: ${this.cases[i].case}`);
            console.log(`Input: ${this.cases[i].input}`);
            console.log(`Output: ${this.convert(this.cases[i].input)}`);
        }     
    }
}

NextNumberPassed.Run()