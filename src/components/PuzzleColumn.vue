<template>
  <div class="puzzle-column">
    <div>
      <div v-for="row in hexList" :key="row.key" class="hex">
        {{ row.val }}
      </div>
    </div>
    <div class="text">
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
