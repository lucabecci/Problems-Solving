function tetra(n: number): number {
  return Math.round((n * (n + 1) * (n + 2)) / 6);
}

console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));
