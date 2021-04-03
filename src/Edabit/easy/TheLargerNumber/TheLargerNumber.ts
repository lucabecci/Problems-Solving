class TheLargestNumber {
    public static resolve(f: Function, g: Function): string{
        if(f() > g()) return 'f'
        else if (g() > f()) return 'g'
        else return 'neither'
    }
}   
console.log(TheLargestNumber.resolve(() => 238832, () => 23233))
console.log(TheLargestNumber.resolve(() => 6655, () => 6655))
console.log(TheLargestNumber.resolve(() => 1366, () => 1366))