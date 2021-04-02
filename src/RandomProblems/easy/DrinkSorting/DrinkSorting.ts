class DrinkSorting {
    private static cases = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10},
        {name: "vodka", price: 130},
        {name: "premiun vodka", price: 230},
        {name: "water", price: 8},
        {name: "beer", price: 29}
    ]

    private static solve(arr: any): any {
        let sorted = arr.sort((a: any, b: any) => (a.price > b.price) ? 1 : -1)
        return sorted
    }
    
    public static Run(): void {
        console.log(this.solve(this.cases))
    }
}

DrinkSorting.Run()
