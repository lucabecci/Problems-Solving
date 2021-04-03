class AmongstCrowd {
    private static cases: string[] = [
        "UcUNFYGaFYFYGtNUH", 
        "bEEFGBuFBRrHgUHlNFYaYr",
        "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"
    ]

    private static solve(badWord: string): string {
        const letters = /[a-z]/g;

        const word = badWord.match(letters)

        return word?.join("")!
    }

    public static Run(): void {
        for(let x = 0; x < this.cases.length; x++ ){
            console.log(`Case: ${x + 1}`)
            console.log(`Input: ${this.cases[x]}`)
            console.log(`Output: ${this.solve(this.cases[x])} \n`)
        }
    }    
}

AmongstCrowd.Run()