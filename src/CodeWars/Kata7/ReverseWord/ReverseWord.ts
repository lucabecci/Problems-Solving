function reverse(str: string): any {
    const wordsArr = str.split(" ")
    let result = ""
    for(let i = 0; i < wordsArr.length; i++){
        if(i === wordsArr.length - 1){
            result += wordsArr[i].split("").reverse().join("")
        }
        else{
            result += wordsArr[i].split("").reverse().join("") + " "
        }
    }
    return result
}

console.log(reverse("This is an example!"))

//other method
const reverse2 = (x: string) => x.split('').reverse().join('')
const reverseWords = (str: string): string => str.split(' ').map(reverse2).join(' ');
