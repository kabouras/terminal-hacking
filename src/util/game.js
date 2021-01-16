export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomWordList = (wordCount, allWordList) => {
  const min = 0;
  const max = allWordList.length;

  const randomWordList = [];

  console.log(wordCount, allWordList)
  let mx = 10;
  let count = 0;

  while(count < mx && randomWordList.length < wordCount) {
    const rndIdx = getRandomNumber(min, max);
    const rndWord = allWordList[rndIdx];

    console.log('rndIdx', rndIdx, rndWord)

    if(randomWordList.indexOf(rndWord) === -1) {
      randomWordList.push(rndWord);
    }
    count++
  }
  return randomWordList;

}