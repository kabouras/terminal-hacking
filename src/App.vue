<template>
    <div class="shround animate__animated animate__fadeOut animate__slower">
      <div class="modal">
        <h1>Terminal Hacking Game</h1>
      </div>
    </div>
  <div id="app">
    <div class="container">    
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
.shround {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(61, 54, 53, .5);
  z-index: 100;
  pointer-events: none;
}
.modal {
  max-width: 700px;  
  margin: 0 auto;
  margin-top: 5em;
  font-size: 2.5em;
  pointer-events: none;
}
</style>


