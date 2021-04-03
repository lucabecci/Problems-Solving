class PowersOfTwo {
  private static cases = [
    {
      case: 1,
      input1: 10,
      input2: 3,
    },
    {
      case: 2,
      input1: -32,
      input2: 2,
    },
  ];

  private static convert(x: number, z: number): number {
    return x * 2 ** z;
  }

  public static Run(): void {
    for (let i = 0; i < this.cases.length; i++) {
      console.log(`Case: ${this.cases[i].case}`);
      console.log(`Input 1: ${this.cases[i].input1}`);
      console.log(`Input 2: ${this.cases[i].input2}`);
      console.log(
        `Output: ${this.convert(this.cases[i].input1, this.cases[i].input2)}`
      );
    }
  }
}

PowersOfTwo.Run();
