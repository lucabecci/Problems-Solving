function findOdd(xs: number[]): number {
    let count = 0
    let temp = 0
    let value = 0
    for (let i = 0; i < xs.length; i++) {
        if(xs[i] % 2 !== 0){
            let loopValue = i == 0 ? 1 : 0
            for(let j = loopValue; j < xs.length; j++){
                if(xs[i] === xs[j]){
                    count++
                }
            }
            if(count > temp){
                temp = count
                value = xs[i]
                count = 0
            }   
        }
    }
    return value
}
/*
1- Encontrar el valor de index
2- Recorrer y guardar todos los iguales en una variable temp
3- Si el valor siguiente es mayor en apariciones y es impar, el anterior sera reemplazado por este
4- Seguir ese patron hasta finalizar el ciclo del array y asi obtener el mayor en apariciones que sea impar
5- retornar el valor
*/

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))