class MatchHouses {
  private static cases = [
    {
      case: 1,
      input: 1,
      expected: 6,
    },
    {
      case: 2,
      input: 4,
      expected: 21,
    },
    {
      case: 3,
      input: 87,
      expected: 436,
    },
    {
      case: 4,
      input: 0,
      expected: 0,
    },
  ];

  private static checkout(step: number): number {
    return step == 0 ? 0 : step * 5 + 1;
  }

  public static Run() {
    for (let i = 0; i < this.cases.length; i++) {
      console.log(`Case: ${this.cases[i].case}`);
      console.log(`Input: ${this.cases[i].input}`);
      console.log(`Expected: ${this.cases[i].expected}`);
      console.log(
        `Output of the method: ${this.checkout(this.cases[i].input)}`
      );
    }
  }
}

MatchHouses.Run();
