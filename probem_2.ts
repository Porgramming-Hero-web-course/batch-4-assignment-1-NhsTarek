{
  function removeDuplicates(numbers: number[]): number[] {
    const newNumbersArr: number[] = [];
    for (const num of numbers) {
      if (!newNumbersArr.includes(num)) {
        newNumbersArr.push(num);
      }
    }
    return newNumbersArr;
  }
}
