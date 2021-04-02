function reverse(str: string): string {
    let result = str.split("").reverse().join("")
    return result
}

console.log(reverse("eyb"))
console.log(reverse("olleh"))
console.log(reverse("rac"))
console.log(reverse("god"))