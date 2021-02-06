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
      :class="{active: node.key === selected.key}"
      :data-pkey="node.key"
      @click.stop="() => onSelect({ node, nodeIdx: idx, charIndex: val.charIndex })"
      @focus.stop="() => onSelect({ node, nodeIdx: idx, charIndex: val.charIndex })"
    />
  </fragment>
</template>
<script>
export default {
  props: ["node", "onSelect", "selected"],
};
</script>
<style >
</style>

