<template>

  <div id="app-component">
    <div id="container">    
      <div 
        class="shroud"
        :class="{ 'animate__animated animate__fadeOut' : !showShroud }"
        @click.stop="hideShroud"
      >
        <div class="modal">
          <div class="align-center">
            <div>***Terminal Hacking Game***</div><br />
            <div class="align-left modal-logo">
              <AsciiCrab />
            </div>
            <br /><br />
          </div>
          <div style="font-size: .8em; padding-left: 10px;">
            <div>
              CONTROLS
            </div>
            <div>
              SINGLE CLICK / CURSOR KEY..............inspect<br />
              DOUBLE CLICK / ENTER  KEY ...............select<br />
            </div>
            <br />
            <div>
              ELEMENTS
            </div>
            <div>
              WORDS.......................Possible Passwords<br />
              BRACKET GROUPS..........Remove "dud" passwords
            </div>
            </div>
        </div>
      </div>
      <div class="terminal-outer-1">
        <GameBoard />
      </div>
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard.vue'
import AsciiCrab from './components/AsciiCrab.vue'

export default {
  name: 'App',
  data() {
    return {
      showShroud: true,
    }
  },
  methods: {
    hideShroud() {
      this.showShroud = false;
    }
  },
  components: {
    GameBoard,
    AsciiCrab
  }  
}
</script>

<style>

</style>


