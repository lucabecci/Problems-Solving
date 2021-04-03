class NumberToBase {
    public static convert(n: number){
        return n.toString(2)
    }
}

console.log(NumberToBase.convert(47))
console.log(NumberToBase.convert(13))
console.log(NumberToBase.convert(10))
console.log(NumberToBase.convert(5))