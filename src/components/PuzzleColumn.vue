<template>
  <div class="puzzle-column">
    <div>
      <div v-for="row in colData.hexList" :key="row.key" class="hex">
        {{ row.val }}
      </div>
    </div>
    <div class="text">
      <fragment
        v-for="row in colData.textList"
        :key="row.key"
      >
        <ColumnItem 
          :node="row" 
          :onSelect="onSelect" 
          :selected="selected"
        />
      </fragment>
    </div>
  </div>
</template>
<script>
import ColumnItem from './ColumnItem';

export default {
  name: "PuzzleColumn",
  components: {
    ColumnItem,
  },
  props: {
    colData: {
      type: Object,
      default: function () {
        return { hexList: [], textList: [] };
      },
    },
    selected: {
      type: Object,
      default: {},
    },
    // focusedElementKey: {
    //   type: Number,
    //   default: undefined
    // },
    // onElementFocus: {
    //   type: Function,
    //   default: undefined
    // },
    onSelect: {
      type: Function,
      default: undefined
    },
    // methods: {
    //   onElementSelect(row) {
    //     this.onElementFocus({...row});
    //     this.onSelect();
    //   }
    // }
  },
};
</script>
