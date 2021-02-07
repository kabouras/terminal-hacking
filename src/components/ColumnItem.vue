<template>
  <span>
    <span
      v-for="(val, idx) in node.valList"
      :key="val.charIndex"
      v-html="`${val.char}&#8203;`"
      :title="`char_${val.charIndex} -- node.charIndex ${selected.charIndex} val.charIndex ${val.charIndex}`"
      :id="`char_${val.charIndex}`"
      :tabindex="node.key"      
      :class="{active: (isActive && (node.type !== 'filler' || (node.type === 'filler' && selected.charIndex === val.charIndex)))}"
      :data-key="node.key"
      @keyup.space="($evt) => handleSelect($evt, 'select',  { node, nodeIdx: idx, charIndex: val.charIndex })"
      @keyup.enter="($evt) => handleSelect($evt, 'select',  { node, nodeIdx: idx, charIndex: val.charIndex })"
      @dblclick.stop="($evt) => handleSelect($evt, 'select', { node, nodeIdx: idx, charIndex: val.charIndex })"
      @focus.stop="($evt) => handleSelect($evt, 'focus', { node, nodeIdx: idx, charIndex: val.charIndex })"
      class="char-span noSelect text-btn"
    />
  </span>
</template>
<script>
export default {
  props: {
    selected: {
      type: Object,
      default: () => ({}),
    },
    node: {
      type: Object,
      default: () => ({}),
    },
    onFocus: {
      type: Function,
      default: undefined
    },
    onSelect: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      selectedFiller: false
    }
  },
  computed: {
    isActive() {
      return this.node.key === this.selected.key && !this.selectedFiller //&& this.node.type !== 'filler';
    }
  },
  methods: {
    handleSelect($evt, command, data) {
      try {
        $evt.preventDefault();
        $evt.stopPropagation();

        const { nodeIdx } = data;
        const { type, valList } = data.node;
        let publishType = type;

        if (type === 'helper' && valList.length > 2 && nodeIdx > 0 && nodeIdx < valList.length - 1) {
          publishType = 'filler';
          this.selectedFiller = true;
        } else {
          this.selectedFiller = false;
        }

        const payload = {
          ...data,
          node: {
            ...data.node,
            type: publishType,
          },
          command
        }

        this.onSelect(payload);

      } catch(e) {
        console.log('!!!!!!!ERROR-handleSelect!!!!!!!!!!!');
        console.log(e)
      }
    }
  }
};
</script>
<style >
</style>

