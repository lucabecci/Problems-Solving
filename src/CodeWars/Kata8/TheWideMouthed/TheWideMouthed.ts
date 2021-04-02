class TheWideMouthed {
    private static cases = [
        {
            case: 1,
            input: 'toucan',
            expected: 'wide'
        },
        {
            case: 2,
            input: 'ant bear',
            expected: 'wide'
        },
        {
            case: 3,
            input: 'alligator',
            expected: 'small'
        }
    ] 

    private static solve(animal: string): string {
        if(animal === 'alligator' || animal === 'ALLIGATOR'){
            return 'small'
          } else {
            return 'wide'
          }
    }

    public static Run(): void {
        this.cases.forEach(c => {
            console.log(`Case: ${c.case}`)
            console.log(`Input: ${c.input}`)
            console.log(`Expected: ${c.expected}`)
            console.log(`Output: ${this.solve(c.input)} \n`)
        });
    }
}

TheWideMouthed.Run()