class TimeforMilk {
    private static cases = [
        {
            case: 1,
            input: new Date(2013, 11, 24)
        },
        {
            case: 2,
            input: new Date(2020, 8, 24)
        },
        {
            case: 3,
            input: new Date(1998, 11, 24)
        }
    ]

    private static check(date: Date): boolean {
        const day = date.getDate()
        const month = date.getMonth()
        if  (month === 11 && day === 24){
            return true
        }
        return false
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input: ${c.input}`)
            console.log(`Output: ${this.check(c.input)}`)
            console.log(`\n`)
        });
    }
}


TimeforMilk.Run()