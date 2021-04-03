import Person from './Person'

class OlderThanMe {
    private static p1: Person = new Person("Luca", 20)
    private static p2: Person = new Person("Alex", 18)
    private static p3: Person = new Person("Emilio", 40)

    public static Run(): void {
        console.log(`${this.p1.compareAge(this.p2)} \n`)
        console.log(`${this.p1.compareAge(this.p3)} \n`)
        console.log(`${this.p2.compareAge(this.p3)} \n`)
    }
}

OlderThanMe.Run()