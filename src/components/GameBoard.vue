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
              <div>
                <div
                  v-for="row in leftColData.hexList"
                  :key="row.key"
                  class="hex"
                >
                  {{ row.val }}
                </div>
              </div>
              <div>
                <div
                  v-for="row in leftColData.textList"
                  :key="row.key"
                  class="text"
                >
                  {{ row.val }}
                </div>
              </div>
            </div>
            <div class="col middle">
              <div>
                <div
                  v-for="row in rightColData.hexList"
                  :key="row.key"
                  class="hex"
                >
                  {{ row.val }}
                </div>
              </div>
              <div>
                <div
                  v-for="row in rightColData.textList"
                  :key="row.key"
                  class="text"
                >
                  {{ row.val }}
                </div>
              </div>
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
} from "../util/word.js";
import { getRandomNumber, getRandomWordList } from "../util/game.js";

export default {
  name: "GameBoard",
  data() {
    return {
      currentLevel: LEVEL_TYPE.LEVEL_1,
      attemptsRemaining: 4,
      rowCount: 17,
      colCount: 19,
      hexValue: 63300,
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
      bracketChars: "(){}[]<>",
    };
  },
  methods: {
    getHexString() {
      const hexPrefix = "0x";
      return `${hexPrefix}${Number(this.hexValue++ >>> 0).toString(16)}`;
    },
    getColFiller() {
      return `@)SNOW@#_[](SDF')BF`;
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

      for (let i = 0; i < this.rowCount; i++) {
        colData.hexList.push({
          key: i,
          val: this.getHexString(),
        });

        colData.textList.push({
          key: i,
          val: rowTextList[i],
        });
      }
    },
    getColumnCharsRowList(colWordList) {
      const wordList = [...colWordList];
      const totalColStringLength = this.colCount * this.rowCount;
      const wordCharsLength =
        LEVEL_WORD_LENGTH[this.currentLevel] * wordList.length;
      const charsToFillLength = totalColStringLength - wordCharsLength;

      for (let i = 0; i < charsToFillLength; i++) {
        wordList.push(this.getRandomFillerChar());
      }

      const shuffledWordsAndCharacters = wordList
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

      const colAsString = shuffledWordsAndCharacters.join("");

      var rowsStringList = [];

      for (
        var i = 0, charsLength = colAsString.length;
        i < charsLength;
        i += this.colCount
      ) {
        rowsStringList.push(colAsString.substring(i, i + this.colCount));
      }

      return rowsStringList;
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
  /* background-color: #000000; */
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
.hex {
  margin-right: 0.35em;
}

.left,
.middle {
  align-self: flex-end;
}
</style>
