function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let count = 0
    for(let i = 0; i < arrayOfSheep.length; i++){
        if (arrayOfSheep[i] === true){
            count++
        }else {
            continue;
        }
    }
    return count
 }

 const test1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]; 

console.log(countSheeps(test1))