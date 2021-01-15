<template>
  <div id="gameboard">
    <div class="outer-1">
      <div class="inner">
        <div class="top">This is the top</div>
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
              <div>>Exact Match!</div>
              <div>>Please wait</div>
              <div>>While system</div>
              <div>>is accessed</div>
              <br /><br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      rowCount: 17,
      hexValue: 63300,
      leftColData: {
        hexList: [],
        textList: [],
      },
      rightColData: {
        hexList: [],
        textList: [],
      },
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
    loadColmnRows(colData) {
      for (let i = 0; i < this.rowCount; i++) {
        colData.hexList.push({
          key: i,
          val: this.getHexString(),
        });
        colData.textList.push({
          key: i,
          val: this.getColFiller(),
        });
      }
    },
  },
  created() {
    this.loadColmnRows(this.leftColData);
    this.loadColmnRows(this.rightColData);
  },
};
</script>

<style>
#gameboard {
  display: inline-block;
  /*color: #00ff33;*/
  color: #00ff66;
  font-size: 1.5em;
  text-align: left;
  border-radius: 2em;
}

.outer-1 {
  background: #3d3635;
  border: solid 6px #8a7f80;
  border-radius: 2em;
  border-style: outset;
  padding: 1em;
}

.inner {
  background-color: #000000;
  border: solid 16px #aaa9ad;
  border-radius: 1em;
  border-style: inset;
  padding: 1em;
}

.row {
  display: flex;
  /*justify-content: space-between; */
}
.col {
  align-self: flex-end;
  display: flex;
}

.col,
.top {
  padding: 0.35em;
}

.left,
.middle {
  align-self: flex-end;
}
</style>
