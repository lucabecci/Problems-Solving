function sumPositives(arr: number[]): number {
    let c = 0
    for(let i = 0; i < arr.length; i++){
        arr[i] > 0 ? c += arr[i] : null;
    }
    return c
}

const arr1 = [1,-4,7,12]

console.log(sumPositives(arr1))