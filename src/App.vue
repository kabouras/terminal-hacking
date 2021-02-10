<template>
    <div class="shround animate__animated animate__fadeOut">
      <div class="modal">
        <h1>Terminal Hacking Game</h1>
      </div>
    </div>
  <div id="app-component">
    <div id="container">    
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

</style>


