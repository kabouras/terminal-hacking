<template>
  <div id="gameboard">
    <div class="outer">
        <div class="inner">
          <div class="top">
            <div>CRABCO INDUSTRIES (TM) CRUSTLINK PROTOCOL</div>
            <div>ENTER PASSWORD NOW</div>
            <br />
            <div>
              {{ attemptsRemaining }} ATTEMPTS(S) LEFT
              <span v-for="idx in attemptsRemaining" :key="idx"> &#9632; </span>
            </div>
          </div>
          <div class="row">
            <div class="col left">
              <PuzzleColumn 
                :colData="leftColData"
              />
            </div>
            <div class="col middle">              
              <PuzzleColumn 
                :colData="rightColData"
              />
            </div>
            <div class="col right">
              <div>
                <div>(\/)(' ')(\/)</div>
                <br /><br /><br />
                <div>>Exact Match!</div>
                <div>>Please wait</div>
                <div>>while system</div>
                <div>>is accessed</div>
                <br /><br /><br />
              </div>
            </div>
        </div>
      </div>
    </div>
    <pre style="color: black"
      >{{
        JSON.stringify(
          {
            wordList,
            passWord,
          },
          null,
          "\t"
        )
      }}
    </pre>
  </div>
</template>

<script>
import {
  LEVEL_TYPE,
  WORD_LEVELS,
  LEVEL_COLUMN_WORD_COUNT,
  LEVEL_WORD_LENGTH,
  BRACKET_PAIRS,
  LEVEL_COLUMN_HELP_COUNT
} from "../util/word.js";
import { 
  getRandomNumber,
  getRandomWordList,
  getRandomHelperList 
} from "../util/game.js";

import PuzzleColumn from './PuzzleColumn';

export default {
  name: "GameBoard",
  components: {
    PuzzleColumn
  },
  data() {
    return {
      currentLevel: LEVEL_TYPE.LEVEL_1,
      attemptsRemaining: 4,
      rowCount: 17,
      colCount: 12,
      hexValue: 63300,
      tabIndex: 1,
      leftColData: {
        hexList: [],
        textList: [],
      },
      rightColData: {
        hexList: [],
        textList: [],
      },
      wordList: [],
      passWord: "",
      fillerChars: "~!@#$%^&_-+=\\?/,:;*.",

    };
  },
  methods: {
    getHexString() {
      const hexPrefix = "0x";
      return `${hexPrefix}${Number(this.hexValue++ >>> 0).toString(16)}`;
    },
    getRandomFillerChar() {
      const min = 0;
      const max = this.fillerChars.length - 1;
      const rnd = getRandomNumber(min, max);
      return this.fillerChars[rnd];
    },
    loadGameWords() {
      const wordCount = LEVEL_COLUMN_WORD_COUNT[this.currentLevel];
      this.wordList = getRandomWordList(
        wordCount * 2,
        WORD_LEVELS[this.currentLevel]
      );
      const passWordIdx = getRandomNumber(0, this.wordList.length - 1);
      this.passWord = this.wordList[passWordIdx];
    },
    loadColmnRows(colData, colWordList) {
      const rowTextList = this.getColumnCharsRowList(colWordList);

      colData.textList = [...rowTextList];


      for (let i = 0; i < this.rowCount; i++) {
        colData.hexList.push({
          key: i,
          val: this.getHexString(),
        });
      }
    },
    getColumnCharsRowList(colWordList) {
      let wordList = colWordList.map(word => ({ type: 'word', val: word}));

      const colhelperList = getRandomHelperList(LEVEL_COLUMN_HELP_COUNT[this.currentLevel], BRACKET_PAIRS, this.fillerChars)


      const helperCharCount = colhelperList.join('').length;

      const helperList = colhelperList.map(word => ({ type: 'helper', val: word}));



      const totalColStringLength = this.colCount * this.rowCount;
      const wordCharsLength = LEVEL_WORD_LENGTH[this.currentLevel] * wordList.length;
      const charsToFillLength = totalColStringLength - wordCharsLength - helperCharCount;

      wordList = wordList.concat(helperList);
      console.log(totalColStringLength, wordCharsLength, helperCharCount, charsToFillLength)

      for (let i = 0; i < charsToFillLength; i++) {
        wordList.push({ type: 'filler', val: this.getRandomFillerChar()});
      }

      const shuffledWordsAndCharacters = wordList
        .map((a) => ({ __sort: Math.random(), __val: a }))
        .sort((a, b) => a.__sort - b.__sort)
        .map((a) => a.__val);

      console.log(shuffledWordsAndCharacters)
      return shuffledWordsAndCharacters.map(w => ({ ...w, key: this.tabIndex++,}))
    },
  },
  created() {
    const wordCount = LEVEL_COLUMN_WORD_COUNT[this.currentLevel];

    this.loadGameWords();
    this.loadColmnRows(this.leftColData, this.wordList.slice(0, wordCount));
    this.loadColmnRows(
      this.rightColData,
      this.wordList.slice(wordCount, this.wordList.length)
    );
  },
};
</script>

<style>
#gameboard {
  display: inline-block;
  color: #00ff66;
  text-shadow: 0 0 5px #00ff33;
  font-size: 1.5em;
  text-align: left;
  border-radius: 2em;
  letter-spacing: 3px;
}

.outer {
  background: #3d3635;
  border: solid 6px #8a7f80;
  border-radius: 2em;
  border-style: outset;
  padding: 1em;
}

.inner {
  overflow: hidden;
  position: relative;
  pointer-events: auto;
  background: repeating-linear-gradient(
    0deg,
    #111,
    #111 3px,
    #000 3px,
    #000 10px
  );
  border: solid 16px #aaa9ad;
  border-radius: 1em;
  border-style: inset;
  padding: 1em;
}

.inner::after {
  content: " ";
  position: absolute;
  pointer-events: none;
  top: 0%; right: 0%; bottom: 10%; left: 10%;
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, .17),
    rgba(255, 255, 255, .1),
    rgba(255, 255, 255, .001)
  );
}

.row {
  display: flex;
}
.col {
  align-self: flex-end;
  display: flex;
}

.col,
.top {
  padding: 0.35em;
}


.text-btn:focus {
  color: #000;
  background-color: #00ff33;
}

.left,
.middle {
  align-self: flex-end;
}
</style>
