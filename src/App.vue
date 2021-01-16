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

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
}

h1 {
  font-size: 3em;
}

body {
  background-color: rgba(0,0,0,.1);
}

</style>
