class SmallestandBiggestN {
  private static cases = [
    {
      case: 1,
      input: [1, 2, 3, 4, 5],
    },
    {
      case: 2,
      input: [33234, 11132, 992, 24, 233, 75],
    },
    {
      case: 3,
      input: [3433234, 1211132, 52],
    },
  ];

  private static calculate(arr: number[]): number[] {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
  }

  public static Run(): void {
    this.cases.forEach((c) => {
      console.log(`Case: ${c.case}`);
      console.log(`Input: ${c.input}`);
      console.log(`Output: ${this.calculate(c.input)}`);
      console.log("\n");
    });
  }
}


SmallestandBiggestN.Run()