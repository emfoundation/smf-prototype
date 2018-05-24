<template>
  <button
    class="button fullscreen-button level-item is-dark "
    @click="toggleFullscreen">
    <span
      :class="isFullscreen ? 'fa-compress' : 'fa-expand'"
      class="fas"
    />
  </button>
</template>

<script>
export default {
  props: {
    fullscreenContainerID: {
      type: String,
      default: "media-container"
    },
    isFullscreen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    toggleFullscreen() {
      this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen();

      // Alert the parent (learner page) and return the new state
      this.$emit("is-fullscreen", !this.isFullscreen);
    },
    enterFullscreen() {
      // Get the fs element from the DOM -> might be a better approach to this
      var mediaContainer = document.getElementById(this.fullscreenContainerID);
      // Standard
      if (mediaContainer.requestFullscreen) {
        mediaContainer.requestFullscreen();
      }
      // Mozilla Firefox
      else if (mediaContainer.mozRequestFullScreen) {
        mediaContainer.mozRequestFullScreen();
      }
      // Safari / Chrome
      else if (mediaContainer.webkitRequestFullScreen) {
        mediaContainer.webkitRequestFullScreen();
      }
      // IE
      else if (mediaContainer.msRequestFullscreen) {
        mediaContainer.msRequestFullscreen();
      }
    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

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
