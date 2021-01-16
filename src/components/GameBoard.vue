<template>
  <div id="gameboard">
    <div class="outer">
      <div class="inner">
        <div class="top">
          <div>CRABCO INDUSTRIES (TM) CRUSTLINK PROTOCOL</div>
          <div>
            ENTER PASSWORD NOW {{ focusedElementIdx }} - {{ lastElementIdx }} -
            {{ focusedElementType }} -- {{ focusedElementVal }}
          </div>
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
              :onElementFocus="onElementFocus"
            />
          </div>
          <div class="col middle">
            <PuzzleColumn
              :colData="rightColData"
              :onElementFocus="onElementFocus"
            />
          </div>
          <div class="col right">
            <div>
              <!-- <div>(\/)(' ')(\/)</div> -->
              <div v-for="row in feedbackRows" :key="row.key">
                >{{ row.val }}
              </div>
              <br />
              <div>></div>
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
  LEVEL_COLUMN_HELP_COUNT,
} from "../util/word.js";
import {
  getRandomNumber,
  getRandomWordList,
  getRandomHelperList,
} from "../util/game.js";

import PuzzleColumn from "./PuzzleColumn";

export default {
  name: "GameBoard",
  components: {
    PuzzleColumn,
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
      feedbackRows: [],
      feedbackRowsKey: 1,
      wordList: [],
      passWord: "",
      fillerChars: "~!@#$%^&_-+=\\?/,:;*.",
      origKeyDown: null,
      focusedElementType: "",
      focusedElementVal: "",
      focusedElementIdx: 0,
      lastElementIdx: 0,
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

      this.lastElementIdx = rowTextList[rowTextList.length - 1].key;

      colData.textList = [...rowTextList];

      for (let i = 0; i < this.rowCount; i++) {
        colData.hexList.push({
          key: i,
          val: this.getHexString(),
        });
      }
    },
    getColumnCharsRowList(colWordList) {
      let wordList = colWordList.map((word) => ({ type: "word", val: word }));

      const colhelperList = getRandomHelperList(
        LEVEL_COLUMN_HELP_COUNT[this.currentLevel],
        BRACKET_PAIRS,
        this.fillerChars
      );

      const helperCharCount = colhelperList.join("").length;

      const helperList = colhelperList.map((word) => ({
        type: "helper",
        val: word,
      }));

      const totalColStringLength = this.colCount * this.rowCount;
      const wordCharsLength =
        LEVEL_WORD_LENGTH[this.currentLevel] * wordList.length;
      const charsToFillLength =
        totalColStringLength - wordCharsLength - helperCharCount;

      wordList = wordList.concat(helperList);

      for (let i = 0; i < charsToFillLength; i++) {
        wordList.push({ type: "filler", val: this.getRandomFillerChar() });
      }

      const shuffledWordsAndCharacters = wordList
        .map((a) => ({ __sort: Math.random(), __val: a }))
        .sort((a, b) => a.__sort - b.__sort)
        .map((a) => a.__val);

      return shuffledWordsAndCharacters.map((w) => ({
        ...w,
        key: this.tabIndex++,
      }));
    },
    clearfeedbackRows() {
      this.feedbackRows.splice(0, this.feedbackRows.length);
    },
    appendfeedbackRows(val) {
      if (this.feedbackRows.length === 15) {
        this.feedbackRows.shift();
      }
      this.feedbackRows.push({
        key: this.feedbackRowsKey++,
        val,
      });
    },
    applyDomEvents() {
      let self = this;
      this.origKeyDown = document.onkeydown;
      document.onkeydown = function (e) {
        console.log(e.keyCode);
        console.log(e.key);
        try {
          switch (e.keyCode) {
            case 13:
              // enter
              self.onSelect();
              break;
            case 37:
              //left
              self.setNextElementFocus(1, true);
              e.preventDefault();
              break;
            case 38:
              //up
              self.setNextElementFocus(12, true);
              e.preventDefault();
              break;
            case 39:
              //right
              self.setNextElementFocus(1);
              e.preventDefault();
              break;
            case 40:
              //down
              self.setNextElementFocus(12);
              e.preventDefault();
              break;
          }
        } catch (e) {
          console.log(e);
        }
      };
    },
    onElementFocus({ key, type, val }) {
      this.focusedElementIdx = key;
      this.focusedElementType = type;
      this.focusedElementVal = val;
    },
    setNextElementFocus(offset, reverse = false) {
      let currIdx = this.focusedElementIdx;
      let nextIdx = 0;

      if (reverse) {
        if (currIdx - offset >= 1) {
          nextIdx = currIdx - offset;
        } else {
          nextIdx = this.lastElementIdx;
        }
      } else {
        if (currIdx + offset <= this.lastElementIdx) {
          nextIdx = currIdx + offset;
        } else {
          nextIdx = 1;
        }
      }

      this.focusedElementIdx = nextIdx;
      document.getElementById(`tab_${nextIdx}`).focus();
    },
    onSelect() {
      const elType = this.focusedElementType;
      if (elType == "word") {
        this.onWordSelect();
      } else if (elType == "helper") {
        this.appendfeedbackRows("DUD REMOVED");
      }
    },
    onWordSelect() {
      let pw = this.passWord;
      let tw = this.focusedElementVal;

      let allMatch = true;
      let matchCount = 0;
      for (let i = 0; i < this.passWord.length; i++) {
        if (pw.charAt(i) === tw.charAt(i)) {
          matchCount++;
        } else {
          allMatch = false;
        }
      }

      this.appendfeedbackRows(this.focusedElementVal);

      if (allMatch) {
        this.clearfeedbackRows();
        this.appendfeedbackRows("Exact Match!");
        this.appendfeedbackRows("Please wait");
        this.appendfeedbackRows("while System");
        this.appendfeedbackRows("is accessed");
      } else {
        this.attemptsRemaining--;
        if (this.attemptsRemaining === 0) {
          this.appendfeedbackRows("Locked Out");
          this.appendfeedbackRows("NO ATTEMPTS REMAIN!");
        } else {
          this.appendfeedbackRows("Entry Denied");
          this.appendfeedbackRows(`${matchCount}/${pw.length} correct`);
        }
      }
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
    this.applyDomEvents();
  },
  destroyed() {
    document.onkeydown = this.origKeyDown;
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
  top: 0%;
  right: 0%;
  bottom: 10%;
  left: 10%;
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.17),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.001)
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
.right {
  width: 180px;
}
</style>
