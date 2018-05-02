<template>
  <div>
    <banner v-bind:title="static_title" v-bind:subtitle='static_subtitle'/>
    <div class="container mb-5">
      <back-link link="/learnerjourneys"/>
      
      <div 
        id="media-container"
        class="mb-5" 
        :class="{ fullscreen: isFullscreen }" 
      >
        <embeded-content v-bind:file="currentAsset.file" v-bind:link="currentAsset.link"/>
        <div class="level is-mobile media-nav-bar">
          <div class="level-left">
            <button v-bind:disabled="assetIndex == 0" class="button min-width is-dark fullscreen-button" @click="previous">
              <span class="fas fa-angle-left mr-2"></span>
              Previous
            </button>
          </div>
          <div class="level-right">
            <fullscreen-button 
              :isFullscreen="isFullscreen" 
              @is-fullscreen="isFullscreen = $event" 
            />
            <button v-bind:disabled="assetIndex == assets.length -1" class="button level-item mr-0 min-width is-dark fullscreen-button" @click="next">
              Next  
              <span class="fas fa-angle-right ml-2"></span>
            </button>
          </div>
        </div>
      </div>

      <section>
        <p class="has-text-weight-light mb-2">Uploaded on {{ currentAsset.uploaded_at | verboseDate }}</p>
        <h3 class="title mb-0">Part {{ assetIndex +1 }} of {{ assets.length }}:</h3>
        <h3 class="title">{{ currentAsset.name }}</h3>

        <p class="main-text" v-html="currentAsset.description">{{ currentAsset.description }}</p>

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
import FullscreenButton from '~/components/UI/FullscreenButton'

export default {
  data () {
    return {
      static_title : 'What is the Circular Economy?',
      static_subtitle: 'Begin your journey of circular enlightenment by following our reccomended tour of the most relevant circular economy info',
      assets : [
        {
          "id": 170,
          "name": "Linear Economy - Simplified",
          "file": "",
          "link": "https://drive.google.com/file/d/1loeAiHS7HC8Fenyx0dTHWKIQsxdzNrKg/preview",
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
          "name": "Rethinking Progress: The circular economy",
          "file": "",
          "link": "https://www.youtube.com/embed/zCRKvDyyHmI",
          "description": "Phasellus scelerisque sapien fringilla lorem imperdiet, at mattis ligula mollis. Duis lobortis blandit tellus ac ullamcorper. Suspendisse id sem consequat, auctor diam non, sollicitudin ipsum. Ut molestie tincidunt felis, in euismod orci. Suspendisse placerat augue tellus. Suspendisse mollis neque massa, id placerat est fermentum id. Sed ac congue nisi, sed auctor enim. Donec et pharetra libero, nec fermentum erat. Sed vel erat pretium, vestibulum elit ut, suscipit enim.<br /><br />Etiam mollis leo volutpat tellus pellentesque efficitur. Suspendisse tincidunt augue at auctor fringilla. Mauris nec eleifend nibh. Aenean imperdiet est ut ipsum dignissim, vel dignissim nulla sollicitudin. Sed scelerisque eget erat a cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin mattis vel erat sit amet scelerisque. Duis eu est risus. Ut fringilla, quam eu condimentum auctor, nisi enim fermentum magna, id porta eros lorem a urna. Phasellus dictum in orci id tincidunt. Duis quis posuere mi. ",
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
          "name": "MUD Jeans - Pioneering a lease model for organic cotton jeans",
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
        },
        {
          "id": 171,
          "name": "Steel in the Circular Economy",
          "file": "https://emf-assets-dev.s3.amazonaws.com/media/13/Steel-in-the-circular-economy.pdf",
          "link": "",
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
          "tags": [1, 4, 5, 3],
          "locations": [],
          "contributors": [],
          "collections": []
        }
      ],
      tags : {
        1 : 'Fashion',
        2 : 'Circular Fibres',
        3 : 'Design Thinking',
        4 : 'Biocycle',
        5 : 'IoT',
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
    FullscreenButton
  },
  methods : {
    previous () {
      if (this.assetIndex > 0)
      {
        this.assetIndex -= 1;
      }
    },
    next () {
      if (this.assetIndex < this.assets.length -1)
      {
        this.assetIndex += 1;
      }
    },
  }
}
</script>

<style scoped>
  .min-width {
    min-width: 100px;
  }
  .main-text {
    width: 60%;
  }
</style>
