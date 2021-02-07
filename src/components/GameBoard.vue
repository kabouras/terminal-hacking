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
        <div 
          class="row"
          v-if="nodeList && nodeList.length === lastRightIdx+ 1"
        >
          <div class="col left">
            <PuzzleColumn
              :colData="leftColData"
              
            >
              <ColumnItem 
                v-for="node in nodeList.slice(0, lastLeftIdx + 1)"                
                :key="node.key"
                :node="node" 
                :onSelect="onSelect" 
                :selected="selected"
              />              
            </PuzzleColumn>
          </div>
          <div class="col middle">
            <PuzzleColumn
              :colData="rightColData"
            >
              <ColumnItem 
                v-for="node in nodeList.slice(lastLeftIdx + 1, lastRightIdx + 1)"                
                :key="node.key"
                :node="node" 
                :onSelect="onSelect" 
                :selected="selected"
              />
            </PuzzleColumn>
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
  // LEVEL_TYPE,
  WORD_LEVELS,
  LEVEL_COLUMN_WORD_COUNT,
  LEVEL_WORD_LENGTH,
  BRACKET_PAIRS,
  LEVEL_COLUMN_HELP_COUNT,
} from "../util/word.js";
import {
  getInitialData,
  getRandomNumber,
  getRandomWordList,
  getRandomHelperList,
} from "../util/game.js";

import PuzzleColumn from "./PuzzleColumn";
import ColumnItem from './ColumnItem';

import { nanoid } from 'nanoid';

export default {
  name: "GameBoard",
  components: {
    PuzzleColumn,
    ColumnItem,
  },
  data() {
    return getInitialData();
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
    handleKeyEvents($evt) {
      $evt.preventDefault();

      const { charIndex, key, type } = this.selected;
      const lastKeyIdx = this.lastRightIdx;
      const lastCharIdx = this.nodeList[this.lastRightIdx].valList[this.nodeList[this.lastRightIdx].valList.length-1].charIndex;
      
      let domIdSelector = null;

      console.log($evt)

      let keyType = $evt.key;

      if(keyType === 'Tab') {
        keyType = $evt.shiftKey ? 'ArrowLeft' : 'ArrowRight'
      }


      try {
        switch (keyType) {
          case 'ArrowLeft':
            //left
            console.log('=====LEFT KEY')

            if(type === 'word') {
              if(key === 0) {
                domIdSelector = lastCharIdx;
              } else {
                let nexCharIndex = this.nodeList[key - 1].valList[this.nodeList[key - 1].valList.length - 1].charIndex;
                domIdSelector = nexCharIndex;
              }
            } else {
              if(charIndex > 0) {
                domIdSelector = charIndex - 1;
              } else {
                domIdSelector = lastCharIdx;
              } 
            }             
            break;
          case 'a':
          case 'ArrowUp': {
            //up
            console.log('=====UP KEY')
            let nexCharIndex = charIndex - this.colCount;
            if(nexCharIndex < 0) {
              nexCharIndex = lastCharIdx + 1 + nexCharIndex;
            }
            domIdSelector = nexCharIndex;           
            break;
          }
          case 'ArrowRight': {
            //right
            console.log('=====RIGHT KEY')
            if(type === 'word') {
              if(key === lastKeyIdx) {
                domIdSelector = 0;
              } else {
                let nexCharIndex = this.nodeList[key + 1].valList[0].charIndex;
                domIdSelector = nexCharIndex;
              }
            } else {
              if(charIndex < lastCharIdx) {
                domIdSelector = charIndex + 1;
              } else {
                domIdSelector = 0;
              }
            }             
            break;
          }
          case 'z':
          case 'ArrowDown': {
            //down
            console.log('=====DOWN KEY')
            let nexCharIndex = charIndex + this.colCount;
            if(nexCharIndex > lastCharIdx) {
              nexCharIndex = (nexCharIndex - lastCharIdx) - 1;
            }
            domIdSelector = nexCharIndex;

            break;
          }
        }
        if(domIdSelector != null) {
          console.log('about to focus', domIdSelector)
          document.getElementById(`char_${domIdSelector}`).focus();
        }
      } catch (e) {
        console.log(e);
      }
      
    },
    onSelect({ command, node, nodeIdx, charIndex}) {
      try {
        const {
          key,
          type,
          val,
          valList
        } = node;

        this.selected = {
          ...this.selected,
          key,
          type,
          val,
          valList,
          nodeIdx,
          charIndex,
          command
        }

        if(command === 'select') {
          const elType = type;
          if (elType == "word") {
            this.onWordSelect();
          } else if (elType == "helper") {
            this.removeDud();
            this.appendfeedbackRows("DUD REMOVED");
          }
        }
      }
      catch(e) {
        console.log('!!!!!!!ERROR-onSelect!!!!!!!!!!!');
        console.log(e)
      }
    },
    removeDud() {
      let pw = this.passWord;  
      const wordList = this.nodeList.filter(w => w.type === 'word' && w.val !== pw);      
      const dudWord = wordList[getRandomNumber(0, wordList.length - 1)];        
      this.dashDud(this.selected.key);
      this.dashDud(dudWord.key);
      
    },
    dashDud(dudIdx) {
      // this.nodeList[this.selected.key].type = 'filler';
      this.nodeList[dudIdx].type = 'filler';        
      this.nodeList[dudIdx].valList.forEach((v) => {
        v.char = '-';      
      });
      this.nodeList[dudIdx].val = this.nodeList[dudIdx].valList.map(v => v.char).join('');
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
    },
    initializeGame() {
      const wordCount = LEVEL_COLUMN_WORD_COUNT[this.currentLevel];
      this.loadGameWords();
      let nodeList = this.getColumnCharsRowList(this.wordList.slice(0, wordCount));
      this.lastLeftIdx = nodeList[nodeList.length - 1].key;
      nodeList = nodeList.concat(this.getColumnCharsRowList(this.wordList.slice(wordCount, this.wordList.length)));
      this.lastRightIdx = nodeList[nodeList.length - 1].key;    
      this.leftColData.hexList = this.loadHexList();
      this.rightColData.hexList = this.loadHexList();
      this.nodeList = nodeList;
      const [first] = this.nodeList;

      this.selected = {
        "key": first.key,
        "type": first.type,
        "val": first.val,
        "valList": [...first.valList],
        "nodeIdx": 0,
        "charIndex": 0
      }
      window.addEventListener('keydown', this.handleKeyEvents)
    }
  },
  created() {
    this.initializeGame();
  },
  destroyed() {
    window.removeEventListener('keydown', this.handleKeyEvents);
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
  height: 621px;
  box-sizing: border-box;
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

@keyframes scanlineframe {
  from {top : -500px;}
  to {top : 1000px;}
}


.inner::before {
  content: " ";
  position: absolute;
  top: -500px;
  left: 0;
  right: 0;  
  background-image: linear-gradient(rgba(0,255,51, .07), rgba(0,255,51, .02));
  height: 375px;
  pointer-events: none;
  animation-name: scanlineframe;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}



.row {
  display: flex;
}
.col {
  align-self: flex-end;
  display: flex;
  width: 266px;
  box-sizing: border-box;
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
  width: 200px;
}

.noSelect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
