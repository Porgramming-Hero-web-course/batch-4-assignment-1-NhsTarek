{
  // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  function sumArray(numbers: number[]): number {
    let total: number = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }

  console.log(sumArray([2, 1]));
}
