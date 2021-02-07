<template>
  <span>
    <span
      v-for="(val, idx) in node.valList"
      :key="val.charIndex"
      v-html="`${val.char}&#8203;`"
      :title="`char_${val.charIndex}`"
      :id="`char_${val.charIndex}`"
      :tabindex="node.key"      
      :class="{active: isActive}"
      :data-key="node.key"
      @click.stop="($evt) => handleSelect($evt, { node, nodeIdx: idx, charIndex: val.charIndex })"
      @focus.stop="($evt) => handleSelect($evt, { node, nodeIdx: idx, charIndex: val.charIndex })"
      class="char-span text-btn"
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
      default: {},
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
      hasDudReported: false,
      selectedFiller: false
    }
  },
  computed: {
    isActive() {
      return this.node.key === this.selected.key && !this.selectedFiller && !this.hasDudReported;
    }
  },
  methods: {
    handleSelect($evt, data) {
      try {
        $evt.preventDefault();
        $evt.stopPropagation();

        console.log('EVENT', $evt.type)

        const { nodeIdx } = data;
        const { type, valList } = data.node;
        let publishType = type;

        if(this.hasDudReported) {
          publishType = 'filler';
        } else if (type === 'helper' && valList.length > 2 && nodeIdx > 0 && nodeIdx < valList.length - 1) {
          publishType = 'filler';
          this.selectedFiller = true;
        } else if(type === 'helper') {
          this.hasDudReported = true;
          this.selectedFiller = false;
        } else {
          this.selectedFiller = false;
        }

        const payload = {
          ...data,
          node: {
            ...data.node,
            type: publishType,
          },
          eventType: $evt.type
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

