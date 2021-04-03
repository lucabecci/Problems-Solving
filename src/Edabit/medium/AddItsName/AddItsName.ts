class AddItsName {
    private static cases = [
        {
            case: 1,
            input1: {}, 
            input2: "Moto", 
            input3: 45000
        },
        {
            case: 2,
            input1: {Dress: 400}, 
            input2: "Pants",
            input3: 300
        },
        {
            case: 3,
            input1: {Uncharted3: 3000, NarutoNextGen: 5000}, 
            input2: "Fifa21", 
            input3: 5000
        }
    ]

    private static solve(
       obj: object, 
       name: string, 
       value: number
    ): object {
        let newProp: any = {}
        newProp[name] = value
        const newObj = Object.assign(obj, newProp)
        return newObj
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Inputs: ${c.input1}, ${c.input2}, ${c.input3}`)
            const obj = this.solve(c.input1, c.input2, c.input3)
            console.log(obj, "\n") 
        });
    }
}

AddItsName.Run()