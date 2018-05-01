<template>
  <div>
    <banner v-bind:title="static_title" v-bind:subtitle='static_subtitle'/>
    <div class="container mb-5">
      <back-link link="/learnerjourneys"/>
      
      <div id="media-container" class="mb-5">
        <embeded-content v-bind:file="currentAsset.file" v-bind:link="currentAsset.link"/>
        <div class="level is-mobile">
          <div class="level-left">
            <button v-bind:disabled="assetIndex == 0" class="button min-width is-dark" @click="previous">Previous</button>
          </div>
          <div class="level-right">
            <button id="fullscreen-btn" class="button level-item min-width is-dark fas fa-expand" @click="toggleFullscreen"></button>
            <button v-bind:disabled="assetIndex == assets.length -1" class="button level-item mr-0 min-width is-dark" @click="next">Next</button>
          </div>
        </div>
      </div>

      <section>
        <p class="has-text-weight-light mb-2">Uploaded on {{ currentAsset.uploaded_at | verboseDate }}</p>
        <h3 class="title mb-0">Part {{ assetIndex +1 }} of {{ assets.length }}:</h3>
        <h3 class="title">{{ currentAsset.name }}</h3>

        <p v-html="currentAsset.description">{{ currentAsset.description }}</p>

        <p class="has-text-weight-bold mt-5 mb-2">This is about...</p>
        <div class="tags">
          <span class="tag is-medium border-1 mr-3" v-for="tag in currentAsset.tags" v-bind:key="tag">
            {{ tags[tag] }}
          </span>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import BackLink from '~/components/UI/BackLink'
import Banner from '~/components/Banner'
import EmbededContent from '~/components/EmbededContent'

export default {
  data () {
    return {
      static_title : 'Learner Journey Name here!',
      static_subtitle: 'Description of what a learner journey is all about.',
      assets : [
        {
          "id": 170,
          "name": "bar",
          "file": "",
          "link": "https://www.youtube.com/embed/zCRKvDyyHmI",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ante vitae ante porttitor, vel cursus elit tempus. Donec vel venenatis nunc. Morbi condimentum ante sit amet erat vestibulum vulputate. In felis justo, luctus ac ultrices at, cursus quis turpis. Proin rhoncus convallis enim eu posuere. Sed eget ligula venenatis, suscipit velit quis, luctus justo. Nulla non lacinia neque. Praesent eget dui dui. Integer eu sapien sit amet tortor pharetra posuere. In eu bibendum nisl. Mauris bibendum molestie erat, id condimentum justo hendrerit quis. Ut eget velit eros. <br><br>Nulla iaculis diam volutpat orci viverra porttitor. Vivamus accumsan tristique enim semper pulvinar. Etiam in egestas arcu. Nam in auctor nisi. Aenean eu suscipit massa, quis facilisis quam. Nunc nec pretium ex. Fusce ipsum est, molestie eget nulla quis, sollicitudin molestie lorem.",
          "duration": null,
          "creation_date": null,
          "copyright_info": "",
          "enabled": true,
          "status": "",
          "type_field": "OT",
          "filetype": "",
          "uploaded_at": "2017-04-14T14:20:23.598593Z",
          "last_edit_at": null,
          "tags": [2, 5],
          "locations": [],
          "contributors": [],
          "collections": []
        },
        {
          "id": 169,
          "name": "foo",
          "file": "https://emf-assets-dev.s3.amazonaws.com/media/13/Achieving-a-circular-economy.pdf",
          "link": "",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ante vitae ante porttitor, vel cursus elit tempus. Donec vel venenatis nunc. Morbi condimentum ante sit amet erat vestibulum vulputate. In felis justo, luctus ac ultrices at, cursus quis turpis. Proin rhoncus convallis enim eu posuere. Sed eget ligula venenatis, suscipit velit quis, luctus justo. Nulla non lacinia neque. Praesent eget dui dui. Integer eu sapien sit amet tortor pharetra posuere. In eu bibendum nisl. Mauris bibendum molestie erat, id condimentum justo hendrerit quis. Ut eget velit eros. <br><br>Nulla iaculis diam volutpat orci viverra porttitor. Vivamus accumsan tristique enim semper pulvinar. Etiam in egestas arcu. Nam in auctor nisi. Aenean eu suscipit massa, quis facilisis quam. Nunc nec pretium ex. Fusce ipsum est, molestie eget nulla quis, sollicitudin molestie lorem.",
          "duration": null,
          "creation_date": null,
          "copyright_info": "",
          "enabled": true,
          "status": "",
          "type_field": "OT",
          "filetype": "",
          "uploaded_at": "2018-01-31T14:20:23.596375Z",
          "last_edit_at": null,
          "tags": [1, 2, 3],
          "locations": [],
          "contributors": [],
          "collections": []
        },
        {
          "id": 171,
          "name": "rum",
          "file": "",
          "link": "https://docs.google.com/presentation/d/e/2PACX-1vQeOfMOgIupwLYwoL0oFlhzIuo5ZzSBNzXMR6WxQsfM07Z7CD_InmNhsWitbl4F5lWm1FYSBgkGR5GO/embed?start=false&loop=false&delayms=60000",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ante vitae ante porttitor, vel cursus elit tempus. Donec vel venenatis nunc. Morbi condimentum ante sit amet erat vestibulum vulputate. In felis justo, luctus ac ultrices at, cursus quis turpis. Proin rhoncus convallis enim eu posuere. Sed eget ligula venenatis, suscipit velit quis, luctus justo. Nulla non lacinia neque. Praesent eget dui dui. Integer eu sapien sit amet tortor pharetra posuere. In eu bibendum nisl. Mauris bibendum molestie erat, id condimentum justo hendrerit quis. Ut eget velit eros. <br><br>Nulla iaculis diam volutpat orci viverra porttitor. Vivamus accumsan tristique enim semper pulvinar. Etiam in egestas arcu. Nam in auctor nisi. Aenean eu suscipit massa, quis facilisis quam. Nunc nec pretium ex. Fusce ipsum est, molestie eget nulla quis, sollicitudin molestie lorem.",
          "duration": null,
          "creation_date": null,
          "copyright_info": "",
          "enabled": true,
          "status": "",
          "type_field": "OT",
          "filetype": "",
          "uploaded_at": "2018-07-23T14:20:23.600082Z",
          "last_edit_at": null,
          "tags": [2, 4, 5],
          "locations": [],
          "contributors": [],
          "collections": []
        }
      ],
      tags : {
        1 : 'CE101',
        2 : 'Circular Fibres',
        3 : 'Biomimicry',
        4 : 'Star Wars',
        5 : 'LoTR',
      },
      assetIndex : 0,
      isFullscreen: false,
    }
  },
  computed : {
    currentAsset() {
      return this.assets[this.assetIndex];
    }
  },
  components : {
    BackLink,
    Banner,
    EmbededContent,
  },
  methods : {
    previous () {
      if (this.assetIndex > 0)
      {
        this.assetIndex -= 1;
      }
      console.log('prev ' + this.currentAsset.id);
    },
    next () {
      if (this.assetIndex < this.assets.length -1)
      {
        this.assetIndex += 1;
      }
      console.log('next ' + this.currentAsset.id);
    },
    toggleFullscreen () {
      // Get element that's going to be toggled fullscreen
      var mediaContainer = document.getElementById("media-container");
      var fsButton = document.getElementById("fullscreen-btn");

      // Make full screen - different standards for different browsers
      if (!this.isFullscreen) {
        this.enterFullscreen(mediaContainer);
        mediaContainer.className += " fullscreen";
        fsButton.className += " fa-compress";
        fsButton.classList.remove("fa-expand");
      } 
      // Exit fullscreen
      else {
        this.exitFullscreen();
        mediaContainer.classList.remove("fullscreen");
        fsButton.classList.remove("fa-compress");
        fsButton.className +=(" fa-expand");
      }

      // Toggle state
      this.isFullscreen = !this.isFullscreen;
    },
    enterFullscreen (mediaContainer) {
      if (mediaContainer.requestFullscreen) {               // Standard
          mediaContainer.requestFullscreen();
      } else if (mediaContainer.mozRequestFullScreen) {     // Moz FF
          mediaContainer.mozRequestFullScreen();
      } else if (mediaContainer.webkitRequestFullScreen) {  // Safari/Chrome
          mediaContainer.webkitRequestFullScreen();
      } else if (mediaContainer.msRequestFullscreen) {      // IE
          mediaContainer.msRequestFullscreen();
      }
    },
    exitFullscreen () {
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
}
</script>

<style scoped>
  @import '~/assets/scss/main.scss';
  .min-width {
    min-width: 100px;
  }
</style>
