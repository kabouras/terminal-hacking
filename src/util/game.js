import {
  LEVEL_TYPE,
  LEVEL_TIMER,
  DISPLAY_MODE,
} from "./word.js";

export const getInitialData = (level, step) => {
  const currentLevel = level || LEVEL_TYPE.LEVEL_1;
  const currentStep = step || 0;
  return {
    currentLevel,
    currentStep,
    displayMode: DISPLAY_MODE.LOADING,
    countDown: LEVEL_TIMER[currentLevel],
    countDownActive: false,
    attemptsRemaining: 4,
    screenRows: 22,
    screenCols: 66,
    rowCount: 17,
    colCount: 12,
    hexValue: 63300,
    tabIndex: 0,
    charIndex: 0,
    nodeList: [],
    leftHexList: [],
    rightHexList: [],
    feedbackRows: [],
    feedbackRowsKey: 1,
    wordList: [],
    passWord: "",
    fillerChars: "~!@#$%^&_-+=\\?/,:;*.",
    origKeyDown: null,
    selected: {},
    lastLeftIdx: 0,
    lastRightIdx: 0,
  };
}


export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getRandomHelperList = (helperCount, helperList, helperchars) => {
  return helperList.slice(0, helperCount)
          .map((a) => ({ sort: Math.random(), val: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.val)  
          .map(h => {
            const start = getRandomNumber(0, helperchars.length -1)
            const end = getRandomNumber(0, helperchars.length -1)
            const randSubstring = helperchars.substr(start, end)
            return  `${h.left}${randSubstring}${h.right}`
          });
}

export const getRandomWordList = (wordCount, allWordList) => {
  const min = 0;
  const max = allWordList.length;

  const randomWordList = [];

  let mx = 10;
  let count = 0;

  while(count < mx && randomWordList.length < wordCount) {
    const rndIdx = getRandomNumber(min, max);
    const rndWord = allWordList[rndIdx];

    if(randomWordList.indexOf(rndWord) === -1) {
      randomWordList.push(rndWord);
    }
    count++
  }
  return randomWordList;

}
