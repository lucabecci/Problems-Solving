class Person {
    private name: string
    private age: number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    public compareAge(person: Person): string {
        if (person.age > this.age) {
            return `${person.name} is older than ${this.name}`
        } else if (person.age < this.age) {
            return `${person.name} is younger than ${this.name}`
        } else {
            return `${person.name} is the same age as ${this.name}`
        }
    }
}

export default Person