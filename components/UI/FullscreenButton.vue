<template>
    <button id="fullscreen-btn" class="button fullscreen-button level-item is-dark fas fa-expand" @click="toggleFullscreen"></button>
</template>

<script>
export default {
  data () {
    return {
      isFullscreen: false,
    }
  },
  props: {
    fullscreenContainerID: {
      default: 'media-container'
    }
  },
  methods: {
    toggleFullscreen () {
      // Get the element that's going to be toggled to fullscreen
      var mediaContainer = document.getElementById(this.fullscreenContainerID);
      // Fullscreen button
      var fsButton = document.getElementById("fullscreen-btn");

      this.isFullscreen 
      ?
        this.exitFullscreen(fsButton)
      : 
        this.enterFullscreen(mediaContainer, fsButton);

     
      // Toggle state
      this.isFullscreen = !this.isFullscreen;
    },
    enterFullscreen (mediaContainer, fsButton) {      
      if (mediaContainer.requestFullscreen) {               // Standard
          mediaContainer.requestFullscreen();

          this.$emit('toggle-fullscreen', true);
          fsButton.className += " fa-compress";
          fsButton.classList.remove("fa-expand");
      } else if (mediaContainer.mozRequestFullScreen) {     // Moz FF
          mediaContainer.mozRequestFullScreen();

          this.$emit('toggle-fullscreen', true);
          fsButton.className += " fa-compress";
          fsButton.classList.remove("fa-expand");
      } else if (mediaContainer.webkitRequestFullScreen) {  // Safari/Chrome
          mediaContainer.webkitRequestFullScreen();

          this.$emit('toggle-fullscreen', true);
          fsButton.className += " fa-compress";
          fsButton.classList.remove("fa-expand");
      } else if (mediaContainer.msRequestFullscreen) {      // IE
          mediaContainer.msRequestFullscreen();

          this.$emit('toggle-fullscreen', true);
          fsButton.className += " fa-compress";
          fsButton.classList.remove("fa-expand");
      }
    },
    exitFullscreen (fsButton) {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
      // Alert the parent (learner page) that fullscreen has been toggled
      this.$emit('toggle-fullscreen', false);

      fsButton.classList.remove("fa-compress");
      fsButton.className +=(" fa-expand");
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
.fullscreen {
  width: 100% !important;
  height: 100% !important;
  background-color: $secondary;
  .embed {
      height: 90vh !important;
  }
  .media-nav-bar {
    background-color: $secondary;
    padding: 0 20px;
    .fullscreen-button {
      border: 1px solid grey;
    }
  }
}
</style>
