class Challenge {
  static solution(n: number) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        count += i;
      } else if (i % 5 === 0) {
        count += i;
      } else if (i % 3 === 0) {
        count += i;
      }
    }
    return count;
  }
}
console.log(Challenge.solution(10));
console.log(Challenge.solution(20));
console.log(Challenge.solution(24));
