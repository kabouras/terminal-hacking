<template>
  <div class="puzzle-column">
    <div>
      <div v-for="row in hexList" :key="row.key" class="hex">
        {{ row.val }}
      </div>
    </div>
    <span class="lazy-spacer">.</span>
    <div class="text col-grid">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "PuzzleColumn",
  props: {
    hexList: {
      type: Array,
      default: function () {
        return [];
      },
    }
  },
};
</script>
