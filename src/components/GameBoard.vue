<template>
  <div id="gameboard">
    <div class="outer">
      <div class="inner"
        :class="{active: hasStarted}"
      >
        <div v-if="hasStarted">
          <div class="top">
            <div>CRABCO INDUSTRIES (TM) CRUSTLINK PROTOCOL</div>
            <div v-if="displayMode === DISPLAY_MODE.GAME">
              <div>ENTER PASSWORD NOW</div>
              <br />
              <div>
                {{ attemptsRemaining }} ATTEMPTS(S) LEFT
                <span v-for="idx in attemptsRemaining" :key="idx"> &#9632; </span>
              </div>
            </div>
          </div>
          <div 
            class="msg"
            v-if="displayMode === DISPLAY_MODE.LOADING">
            LOADING...
            <br /><br /><br />
            <div>
              CONTROLS
            </div>
            <div class="sub">
              SINGLE CLICK / CURSOR KEY...inspect<br />
              DOUBLE CLICK / ENTER  KEY....select<br />
            </div>
            <br /><br />  
            <div>
              ELEMENTS
            </div>
            <div class="sub">
              WORDS.......................Possible Passwords<br />

              BRACKET GROUPS..............Remove "dud" passwords
            </div>
            <div class="sub">
              
            </div>
          </div>
          <div
            class="row"
            v-if="displayMode === DISPLAY_MODE.GAME && nodeList && nodeList.length === lastRightIdx + 1"
          >
            <div class="col left">
              <PuzzleColumn :hexList="leftHexList">
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
              <PuzzleColumn :hexList="rightHexList">
                <ColumnItem
                  v-for="node in nodeList.slice(
                    lastLeftIdx + 1,
                    lastRightIdx + 1
                  )"
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
      <div class="ctrl-btn-wrap">
        <div class="btn-panel" style="margin-right: auto">
          <div class="screw screw-a" />
          <div class="screw screw-b" />
          <div class="screw screw-c" />
          <div class="screw screw-d" />
          <div class="logo">
            CRABCO Terminal
            <div style="text-align: center">
              <img src="@/assets/crabflat-grey.svg" height="36px" />
            </div>
          </div>
        </div>
        <div class="btn-panel level">
          <div class="screw screw-a" />
          <div class="screw screw-b" />
          <div class="screw screw-c" />
          <div class="screw screw-d" />
          <div style="text-align: center">Level</div>
          <div class="level-wrap">
            <div class="level-btn" :class="{ active: hasStarted }">
              <div class="level-btn-text">1</div>
              <div class="level-btn-light" />
            </div>
            <div class="level-btn middle">
              <div class="level-btn-text">2</div>
              <div class="level-btn-light" />
            </div>
            <div class="level-btn">
              <div class="level-btn-text">3</div>
              <div class="level-btn-light" />
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <div class="screw screw-a" />
          <div class="screw screw-b" />
          <div class="screw screw-c" />
          <div class="screw screw-d" />
          <div style="text-align: center">Start</div>
          <button
            class="start-btn"
            :class="{ active: hasStarted }"
            @click.stop="() => toggleStarted()"
          >
            <div class="start-btn-inner"></div>
          </button>
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
  DISPLAY_MODE,
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
import ColumnItem from "./ColumnItem";

import { nanoid } from "nanoid";

export default {
  name: "GameBoard",
  components: {
    PuzzleColumn,
    ColumnItem,
  },
  data() {
    return {
      hasStarted: false,
      DISPLAY_MODE,
      ...getInitialData(),
    };
  },
  methods: {
    toggleStarted() {
      this.hasStarted = !this.hasStarted;

      if (this.hasStarted) {
        console.log('init metho')
        this.reset();
        this.initializeGame()
        setTimeout(() => this.displayMode = DISPLAY_MODE.GAME, 3000);
        
      }
    },
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
        valList: word
          .split("")
          .map((char) => ({ key: this.getRandId(), char })),
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
        valList: word
          .split("")
          .map((char) => ({ key: this.getRandId(), char })),
      }));

      const totalColStringLength = this.colCount * this.rowCount;
      const wordCharsLength =
        LEVEL_WORD_LENGTH[this.currentLevel] * wordList.length;
      const charsToFillLength =
        totalColStringLength - wordCharsLength - helperCharCount;

      wordList = wordList.concat(helperList);

      for (let i = 0; i < charsToFillLength; i++) {
        const randChar = this.getRandomFillerChar();
        wordList.push({
          type: "filler",
          val: randChar,
          valList: [{ key: this.getRandId(), char: randChar }],
        });
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
          valList: w.valList.map((v) => ({
            ...v,
            charIndex: this.charIndex++,
            key,
          })),
        };
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
      const lastCharIdx = this.nodeList[this.lastRightIdx].valList[
        this.nodeList[this.lastRightIdx].valList.length - 1
      ].charIndex;

      let domIdSelector = null;

      console.log($evt);

      let keyType = $evt.key;

      if (keyType === "Tab") {
        keyType = $evt.shiftKey ? "ArrowLeft" : "ArrowRight";
      }

      try {
        switch (keyType) {
          case "ArrowLeft":
            //left
            console.log("=====LEFT KEY");

            if (type === "word") {
              if (key === 0) {
                domIdSelector = lastCharIdx;
              } else {
                let nexCharIndex = this.nodeList[key - 1].valList[
                  this.nodeList[key - 1].valList.length - 1
                ].charIndex;
                domIdSelector = nexCharIndex;
              }
            } else {
              if (charIndex > 0) {
                domIdSelector = charIndex - 1;
              } else {
                domIdSelector = lastCharIdx;
              }
            }
            break;
          case "a":
          case "ArrowUp": {
            //up
            console.log("=====UP KEY");
            let nexCharIndex = charIndex - this.colCount;
            if (nexCharIndex < 0) {
              nexCharIndex = lastCharIdx + 1 + nexCharIndex;
            }
            domIdSelector = nexCharIndex;
            break;
          }
          case "ArrowRight": {
            //right
            console.log("=====RIGHT KEY");
            if (type === "word") {
              if (key === lastKeyIdx) {
                domIdSelector = 0;
              } else {
                let nexCharIndex = this.nodeList[key + 1].valList[0].charIndex;
                domIdSelector = nexCharIndex;
              }
            } else {
              if (charIndex < lastCharIdx) {
                domIdSelector = charIndex + 1;
              } else {
                domIdSelector = 0;
              }
            }
            break;
          }
          case "z":
          case "ArrowDown": {
            //down
            console.log("=====DOWN KEY");
            let nexCharIndex = charIndex + this.colCount;
            if (nexCharIndex > lastCharIdx) {
              nexCharIndex = nexCharIndex - lastCharIdx - 1;
            }
            domIdSelector = nexCharIndex;

            break;
          }
        }
        if (domIdSelector != null) {
          console.log("about to focus", domIdSelector);
          document.getElementById(`char_${domIdSelector}`).focus();
        }
      } catch (e) {
        console.log(e);
      }
    },
    onSelect({ command, node, nodeIdx, charIndex }) {
      try {
        const { key, type, val, valList } = node;

        this.selected = {
          ...this.selected,
          key,
          type,
          val,
          valList,
          nodeIdx,
          charIndex,
          command,
        };

        if (command === "select") {
          const elType = type;
          if (elType == "word") {
            this.onWordSelect();
          } else if (elType == "helper") {
            this.removeDud();
            this.appendfeedbackRows("DUD REMOVED");
          }
        }
      } catch (e) {
        console.log("!!!!!!!ERROR-onSelect!!!!!!!!!!!");
        console.log(e);
      }
    },
    removeDud() {
      let pw = this.passWord;
      const wordList = this.nodeList.filter(
        (w) => w.type === "word" && w.val !== pw
      );
      const dudWord = wordList[getRandomNumber(0, wordList.length - 1)];
      this.dashDud(this.selected.key);
      this.dashDud(dudWord.key);
    },
    dashDud(dudIdx) {
      // this.nodeList[this.selected.key].type = 'filler';
      this.nodeList[dudIdx].type = "filler";
      this.nodeList[dudIdx].valList.forEach((v) => {
        v.char = "-";
      });
      this.nodeList[dudIdx].val = this.nodeList[dudIdx].valList
        .map((v) => v.char)
        .join("");
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
    reset() {
      const initialData = getInitialData();
      Object.keys(initialData).forEach(k => {
        const item = initialData[k];
        if(Array.isArray(item)) {
          this[k].splice(0, this[k].length);
        } else if (typeof item === 'object') {
          this[k] = {};
        } else {
          this[k] = item;
        }
      });
    },
    initializeGame() {
      const wordCount = LEVEL_COLUMN_WORD_COUNT[this.currentLevel];
      this.loadGameWords();
      let nodeList = this.getColumnCharsRowList(
        this.wordList.slice(0, wordCount)
      );
      this.lastLeftIdx = nodeList[nodeList.length - 1].key;
      nodeList = nodeList.concat(
        this.getColumnCharsRowList(
          this.wordList.slice(wordCount, this.wordList.length)
        )
      );
      this.lastRightIdx = nodeList[nodeList.length - 1].key;
      this.leftHexList = this.loadHexList();
      this.rightHexList = this.loadHexList();

      this.nodeList.splice(0, this.nodeList.length);
      nodeList.forEach(n => this.nodeList.push(n));
      const [first] = this.nodeList;

      this.selected = {
        key: first.key,
        type: first.type,
        val: first.val,
        valList: [...first.valList],
        nodeIdx: 0,
        charIndex: 0,
      };
      window.addEventListener("keydown", this.handleKeyEvents);
    },
  },
  created() {
    // this.initializeGame();
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeyEvents);
  },
};
</script>
