<template>
  <div id="app">
    <div class="container">
      <h1>Terminal Hacking Game</h1>
      <div class="terminal-outer-1">
        <GameBoard />
      </div>
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard.vue'

export default {
  name: 'App',
  components: {
    GameBoard
  }  
}
</script>

