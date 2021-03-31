class AddUpTheNumber {
  private static cases = [
    {
      case: 1,
      input: 4,
    },
    {
      case: 2,
      input: 13,
    },
    {
      case: 3,
      input: 600,
    },
  ];

  private static convert(n: number): number {
    let x = 0;
    for (let i = 0; i <= n; i++) {
      x = x + i;
    }
    return x;
  }

  public static Run() {
    for (let i = 0; i < this.cases.length; i++) {
      console.log(`Case: ${this.cases[i].case}`);
      console.log(`Input: ${this.cases[i].input}`);
      console.log(`Output: ${this.convert(this.cases[i].input)}`);
      console.log("\n");
    }
  }
}

AddUpTheNumber.Run();
