class Bitwise {
  static cases = [
    {
      case: 1,
      input: [7, 12],
    },
    {
      case: 2,
      input: [6, 23],
    },
  ];
  private static OR(x: number, z: number): number {
    const preResult = x | z;
    return preResult;
  }
  private static XOR(x: number, z: number): number {
    const preResult = x ^ z;
    return preResult;
  }
  private static AND(x: number, z: number): number {
    const preResult = x & z;
    return preResult;
  }

  public static Run(): void {
    this.cases.forEach(c => {
        console.log(`Case: ${c.case}`)
        for(let i = 0; i < c.input.length; i++){
            console.log(`Input ${i+1}: ${c.input[i]}`)
        }
        console.log(`Output AND: ${this.AND(c.input[0], c.input[1])}`)
        console.log(`Output XOR: ${this.XOR(c.input[0], c.input[1])}`)
        console.log(`Output OR: ${this.OR(c.input[0], c.input[1])}`)
        console.log(`\n`)
    });
  }
}

Bitwise.Run()