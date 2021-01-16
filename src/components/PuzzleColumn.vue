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
        v-html="`${row.val.split('').join('&#8203;')}&#8203;`"
        class="text-btn"
        :tabindex="row.key"
        :autofocus="(row.key === 1) ? 'autofocus' : false"
      />
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

.text-btn:focus {
  animation: text-btn 1s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}
/* @keyframes text-btn { to { opacity: 0; } } */
@keyframes text-btn {
  0%   {opacity: 1;}
  50%  {opacity: 1;}
  100% {opacity: 0;}
}

</style>
