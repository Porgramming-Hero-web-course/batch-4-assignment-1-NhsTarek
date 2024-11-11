{
  function sumArray(numbers: number[]): number {
    let total: number = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
}
