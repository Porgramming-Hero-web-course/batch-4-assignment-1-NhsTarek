{
  function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSent = sentence.toLocaleLowerCase();
    const lowerCaseWord = word.toLocaleLowerCase();

    const words = lowerCaseSent.split(' ');
    let count: number = 0;

    for (const w of words) {
      if (w === lowerCaseWord) {
        count++;
      }
    }
    return count;
  }
}
