<template>
  <div id="gameboard">
    <div class="outer">
      <div class="inner">
        <div class="top">
          <div>CRABCO INDUSTRIES (TM) CRUSTLINK PROTOCOL</div>
          <div>
            ENTER PASSWORD NOW 
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
              :onSelect="onSelect"
              :selected="selected"
            />
          </div>
          <div class="col middle">
            <PuzzleColumn
              :colData="rightColData"
              :onSelect="onSelect"
              :selected="selected"
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
            selected,
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

import { nanoid } from 'nanoid';

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
      tabIndex: 0,
      charIndex: 0,
      nodeList: [],
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
      selected: {},
      lastLeftIdx: 0,
      lastRightIdx: 0,
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
    loadHexList() {
      const hexList = [];
      for (let i = 0; i < this.rowCount; i++) {
        hexList.push({
          key: i,
          val: this.getHexString(),
        });
      }

      return hexList;
    },
    getColumnCharsRowList(colWordList) {
      let wordList = colWordList.map((word) => ({ 
        type: "word", 
        val: word,  
        valList: word.split('').map(char => ({ key: this.getRandId(), char }))
      }));

      const colhelperList = getRandomHelperList(
        LEVEL_COLUMN_HELP_COUNT[this.currentLevel],
        BRACKET_PAIRS,
        this.fillerChars
      );

      const helperCharCount = colhelperList.join("").length;

      const helperList = colhelperList.map((word) => ({
        type: "helper",
        val: word,
        valList: word.split('').map(char => ({ key: this.getRandId(), char }))
      }));

      const totalColStringLength = this.colCount * this.rowCount;
      const wordCharsLength =
        LEVEL_WORD_LENGTH[this.currentLevel] * wordList.length;
      const charsToFillLength =
        totalColStringLength - wordCharsLength - helperCharCount;

      wordList = wordList.concat(helperList);

      for (let i = 0; i < charsToFillLength; i++) {
        const randChar = this.getRandomFillerChar();
        wordList.push({ type: "filler", val:randChar,  valList:[{ key: this.getRandId(), char: randChar }] });
      }

      const shuffledWordsAndCharacters = wordList
        .map((a) => ({ __sort: Math.random(), __val: a }))
        .sort((a, b) => a.__sort - b.__sort)
        .map((a) => a.__val);

      return shuffledWordsAndCharacters.map((w) => {
        const key = this.tabIndex++;
        return {
          ...w,
          key,
          valList: w.valList
            .map(v => ({...v, charIndex: this.charIndex++, key }))
        }
      });
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
        console.log('this.focusedElementIdx', self.focusedElementIdx)
        const currElement = document.getElementById(`char_${self.focusedElementIdx}`);

        try {
          switch (e.keyCode) {
            case 13:
              // enter
              console.log('=====ENTER KEY')
              // self.onSelect();
              break;
            case 37:
              //left
              console.log('=====LEFT KEY')
              currElement.parentNode.previousSibling.lastChild.focus();
              
              // self.setNextElementFocus(1, true);
              e.preventDefault();
              break;
            case 38:
              //up
              console.log('=====UP KEY')
              self.setNextElementFocus(12, true);
              e.preventDefault();
              break;
            case 39:
              //right
              console.log('=====RIGHT KEY')
              // self.setNextElementFocus(1);
              // currElement.parentNode.nextSibling.firstChild.focus();
              e.preventDefault();
              break;
            case 40:
              //down
              console.log('=====DOWN KEY')
              self.setNextElementFocus(12);
              e.preventDefault();
              break;
          }
        } catch (e) {
          console.log(e);
        }
      };
    },
    onSelect({ node, nodeIdx, charIndex}) {
      
      const {
        key,
        type,
        val,
        valList
      } = node;

      console.log('onSelect',
        key,
        type,
        val,
        valList,
        nodeIdx,
        charIndex
      );

      this.selected = {
        ...this.selected,
        key,
        type,
        val,
        valList,
        nodeIdx,
        charIndex
      }



      const elType = type;
      if (elType == "word") {
        this.onWordSelect();
      } else if (elType == "helper") {
        this.removeDud();
        this.appendfeedbackRows("DUD REMOVED");
      }
    },
    removeDud() {
      let pw = this.passWord;
      
      const wordList = this.leftColData.textList.concat(this.rightColData.textList)
                          .filter(w => w.type === 'word' && w.val !== pw);      
      const dudWord = wordList[getRandomNumber(0, wordList.length - 1)];

      let dudIdx;
      if(dudWord.key <  this.rightColData.textList[0].key) {
        dudIdx = this.leftColData.textList.findIndex(w => w.key === dudWord.key);
        this.dashDud(this.leftColData.textList, dudIdx)
      } else {
        dudIdx = this.rightColData.textList.findIndex(w => w.key === dudWord.key);
        this.dashDud(this.rightColData.textList, dudIdx)        
      }
    },
    dashDud(list, dudIdx) {
        console.log('b4', JSON.stringify(list[dudIdx]))
        list[dudIdx].type = 'filler';        
        list[dudIdx].valList = list[dudIdx].valList.map(v => ({...v, char: '-'}));
        list[dudIdx].val = list[dudIdx].valList.map(v => v.char).join('');
        console.log('af', JSON.stringify(list[dudIdx]))
    },
    onElementFocus(data) {
      // console.log(JSON.stringify(data))
      // const { key, type, val, charIndex } = data;
      // this.focusedElementIdx = charIndex;
      // this.focusedElementKey = key;
      // this.focusedElementType = type;
      // this.focusedElementVal = val;
    },
    setNextElementFocus(offset, reverse = false) {
      let currIdx = this.focusedElementIdx;
      let nextIdx = 0;
      const lastCharIdx = this.charIndex;

      if (reverse) {
        if (currIdx - offset >= 1) {
          
          nextIdx = currIdx - offset;
          console.log('curr', document.getElementById(`char_${currIdx}`).dataset.pkey );
          console.log('next', document.getElementById(`char_${nextIdx}`).dataset.pkey );

        } else {
          nextIdx = lastCharIdx;
        }
      } else {
        if (currIdx + offset <= lastCharIdx) {
          nextIdx = currIdx + offset;
        } else {
          nextIdx = 1;
        }
      }

      this.focusedElementIdx = nextIdx;
      document.getElementById(`char_${nextIdx}`).focus();
    },
    onWordSelect() {
      let pw = this.passWord;
      let tw = this.selected.val;

      let allMatch = true;
      let matchCount = 0;
      for (let i = 0; i < this.passWord.length; i++) {
        if (pw.charAt(i) === tw.charAt(i)) {
          matchCount++;
        } else {
          allMatch = false;
        }
      }

      this.appendfeedbackRows(this.selected.val);

      if (allMatch) {
        this.clearfeedbackRows();
        this.appendfeedbackRows("Exact Match!");
        this.appendfeedbackRows("Please wait");
        this.appendfeedbackRows("while System");
        this.appendfeedbackRows("is accessed");
      } else {
        this.attemptsRemaining--;
        if (this.attemptsRemaining === 0) {
          this.clearfeedbackRows();
          this.appendfeedbackRows("Locked Out");
          this.appendfeedbackRows("NO ATTEMPTS LEFT");
        } else {
          this.appendfeedbackRows("Entry Denied");
          this.appendfeedbackRows(`${matchCount}/${pw.length} correct`);
        }
      }
    },
    getRandId() {
      return nanoid();
    }
  },
  created() {
    const wordCount = LEVEL_COLUMN_WORD_COUNT[this.currentLevel];

    this.loadGameWords();

    let nodeList = this.getColumnCharsRowList(this.wordList.slice(0, wordCount));
    this.lastLeftIdx = nodeList[nodeList.length - 1].key;

 

    console.log('last left', nodeList.length - 1, this.lastLeftIdx)


    nodeList = nodeList.concat(this.getColumnCharsRowList(this.wordList.slice(wordCount, this.wordList.length)));
    this.lastRightIdx = nodeList[nodeList.length - 1].key;


    console.log('last right', nodeList.length - 1, this.lastRightIdx)
    console.log(nodeList)
    
    this.leftColData.hexList = this.loadHexList();
    this.rightColData.hexList = this.loadHexList();

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

.puzzle-column {
  display: flex
}
.hex {
  margin-right: 0.45em;
}
.text {
  /* width: 12ch; */
  width: 162px; 
  box-sizing: border-box;
}
.text, .text-btn{ 
   word-break: break-all;
   white-space: break-all;
}

.text-btn {
  display: inline;
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  
}

.text-btn.active,
.text-btn:focus {
  animation: text-btn .8s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.text-btn.active,
.text-btn:focus {
  color: #000;
  background-color: #00ff33;
}

.char-span:focus {
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  border-radius: 0;
  outline-width: 0;
  /* background-color: black;
  color: white; */
}

/* @keyframes text-btn { to { opacity: 0; } } */
@keyframes text-btn {
  0%   {opacity: 1;}
  50%  {opacity: 1;}
  100% {opacity: 0;}
}


.left,
.middle {
  align-self: flex-end;
}
.right {
  width: 180px;
}
</style>
