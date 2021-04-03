const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function HowGood(name: string): string {
  const splitName = name.toUpperCase().split("");
  let count = 0;
  const score = Object.entries(scores);
  splitName.forEach((l) => {
    for (const [letter, value] of score) {
      if (l === letter) {
        count += value;
      }
    }
  });

  if (count <= 60) {
    return "NOT TOO GOOD";
  } else if (count >= 61 && count <= 300) {
    return "VERY GOOD";
  } else if (count >= 301 && count <= 599) {
    return "VERY GOOD";
  } else {
    return "THE BEST";
  }
}

console.log(HowGood("PUBG"));
console.log(HowGood("MUBASHIR"));
console.log(HowGood("YOU"));
console.log(HowGood("MATT"));
