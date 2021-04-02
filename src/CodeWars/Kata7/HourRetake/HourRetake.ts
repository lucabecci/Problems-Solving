function transform(seconds: number): string {
    return  `${~~(seconds/3600)} hour(s) and ${~~((seconds%3600)/60)} minute(s)`
}

console.log(transform(3600))
console.log(transform(3601))
console.log(transform(3500))
console.log(transform(323500))
console.log(transform(0))