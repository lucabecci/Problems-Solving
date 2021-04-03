function shiftToRight(n1: number, n2: number): number {
  return Math.floor(n1 / 2 ** n2);
}

console.log(shiftToRight(80, 3));

console.log(shiftToRight(-24, 2));

console.log(shiftToRight(-5, 1));

console.log(shiftToRight(4666, 6));

console.log(shiftToRight(3777, 6));

console.log(shiftToRight(-512, 10));
