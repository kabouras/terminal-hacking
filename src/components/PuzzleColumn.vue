<template>
  <div class="puzzle-column">
    <div>
      <div v-for="row in colData.hexList" :key="row.key" class="hex">
        {{ row.val }}
      </div>
    </div>
    <div class="text">
      <span
        v-for="row in colData.textList"
        :key="row.key"
        
        class="text-btn"
        :class="{'active': row.key === focusedElementKey }"
        :autofocus="(row.key === 1) ? 'autofocus' : false"
        :id="`tab_${row.key}`"

      >
        <span
          :tabindex="row.key"
          v-for="val in row.valList"
          :key="val.charIndex"
          v-html="`${val.char}&#8203;`"  
          :title="val.charIndex"
          :id="`char_${val.charIndex}`"
          class="char-span"
          :data-pkey="row.key"

          @click="() => {
            onElementFocus({...row, charIndex: val.charIndex});
            onSelect();
          }"
          @focus="() => onElementFocus({...row, charIndex: val.charIndex})"
        />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "PuzzleColumn",
  props: {
    colData: {
      type: Object,
      default: function () {
        return { hexList: [], textList: [] };
      },
    },
    focusedElementKey: {
      type: Number,
      default: undefined
    },
    onElementFocus: {
      type: Function,
      default: undefined
    },
    onSelect: {
      type: Function,
      default: undefined
    },
    methods: {
      onElementSelect(row) {
        this.onElementFocus({...row});
        this.onSelect();
      }
    }
  },
};
</script>

<style>
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
   /* overflow-wrap: break-word; */
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

</style>
