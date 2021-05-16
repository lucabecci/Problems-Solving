function wave(str: string): string[] | void{
    if(str.trim() === ""){
        return []
    }
    const splited = str.split("")
    let result = []
    for(let i = 0; i < splited.length; i++){
        if(splited[i].trim() === ""){
            continue;
        }
        let upper = str.split("")
        upper[i] = upper[i].toUpperCase()
        result.push(upper.join(""))
    }
    return result
}

console.log(wave("two words"))