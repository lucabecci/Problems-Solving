class MinToSec {
  private static cases = [
    {
      case: 1,
      input: 555,
    },
    {
      case: 2,
      input: 22,
    },
    {
      case: 3,
      input: 5,
    },
  ];
  private static convert(n: number): number {
    const converted = n * 60;
    return converted;
  }

  public static Run() {
    for (let i = 0; i < this.cases.length; i++) {
      console.log(`Case: ${this.cases[i].case}`);
      console.log(`Input: ${this.cases[i].input}`);
      console.log(`Output: ${this.convert(this.cases[i].input)}`);
    }
  }
}

MinToSec.Run();
