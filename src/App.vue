<template>

  <div id="app-component">
    <div id="container">    

      <div class="terminal-outer-1">
        <div 
          class="shroud"
          :class="{ 'animate__animated animate__fadeOut' : animate }"
          @click.stop="hideShroud"
          v-if="showShroud"
        >
          <div class="modal"
            
          >
            <div class="align-center">
              <br />
              <div>***Terminal Hacking Game***</div>
              <br />
              <div class="align-left modal-logo">
                <AsciiCrab />
              </div>
              <br />
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
      animate: false,
    }
  },
  methods: {
    hideShroud() {
      this.animate = true;
      setTimeout( () => {
        this.showShroud = false;

      }, 1000)
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


