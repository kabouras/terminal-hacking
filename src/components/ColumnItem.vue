<template>
  <fragment>
    <span
      :tabindex="node.key"
      v-for="(val, idx) in node.valList"
      :key="val.charIndex"
      v-html="`${val.char}&#8203;`"
      :title="val.charIndex"
      :id="`char_${val.charIndex}`"
      class="char-span text-btn"
      :class="{active: isActive}"
      :data-pkey="node.key"
      @focus.stop="($evt) => handleSelect($evt, { node, nodeIdx: idx, charIndex: val.charIndex })"
    />
  </fragment>
</template>
<script>
export default {
  props: ["node", "onSelect", "selected"],
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
        }
      }

      $evt.preventDefault();
      $evt.stopPropagation();
      this.onSelect(payload)
    }
  }
};
</script>
<style >
</style>

