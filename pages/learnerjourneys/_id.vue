<template>
  <div>
      <embeded-content v-bind:currentAssetFile="currentAsset.file"/>
      <button @click="previous">Previous</button>
      <button @click="next">Next</button>
      <br>

      <section>
        <p>{{ currentAsset.uploaded_at }}</p>
        <h3>Part {{ assetIndex +1 }} of {{ assets.length }}</h3>
        <h3>{{ currentAsset.name }}</h3>
        <p>{{ currentAsset.description }}</p>

        <br>
        <p>This is about...</p>
        <div class="tags">
          <span v-for="tag in currentAsset.tags" v-bind:key="tag" class="tag is-medium">
            {{ tags[tag] }}
          </span>
        </div>

      </section>
  </div>
</template>

<script>
import EmbededContent from '~/components/EmbededContent'

export default {
  data () {
    return {
      assets : [
        {
          "id": 170,
          "name": "bar",
          "file": 'file1',
          "link": "",
          "description": "hkjh skjdfh skjdfh skdjfhs kdjfhs kjdhf ",
          "duration": null,
          "creation_date": null,
          "copyright_info": "",
          "enabled": true,
          "status": "",
          "type_field": "OT",
          "filetype": "",
          "uploaded_at": "2018-04-26T14:20:23.598593Z",
          "last_edit_at": null,
          "tags": [2, 5],
          "locations": [],
          "contributors": [],
          "collections": []
        },
        {
          "id": 169,
          "name": "foo",
          "file": 'file2',
          "link": "",
          "description": "kjh ksjdhf skjdfh skjfhs kdjfhds kfjh",
          "duration": null,
          "creation_date": null,
          "copyright_info": "",
          "enabled": true,
          "status": "",
          "type_field": "OT",
          "filetype": "",
          "uploaded_at": "2018-04-26T14:20:23.596375Z",
          "last_edit_at": null,
          "tags": [1, 2, 3],
          "locations": [],
          "contributors": [],
          "collections": []
        },
        {
          "id": 171,
          "name": "rum",
          "file": 'file3',
          "link": "",
          "description": "jh kjhsdf kjshdf kjshdf skjdfh k",
          "duration": null,
          "creation_date": null,
          "copyright_info": "",
          "enabled": true,
          "status": "",
          "type_field": "OT",
          "filetype": "",
          "uploaded_at": "2018-04-26T14:20:23.600082Z",
          "last_edit_at": null,
          "tags": [2, 4, 5],
          "locations": [],
          "contributors": [],
          "collections": []
        }
      ],
      assetIndex : 0,
      tags : {
        1 : 'CE101',
        2 : 'Circular Fibres',
        3 : 'Biomimicry',
        4 : 'Star Wars',
        5 : 'LoTR',
      } 
    }
  },
  computed : {
    currentAsset() {
      return this.assets[this.assetIndex];
    }
  },
  components : {
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
  }
}
</script>

<style>

</style>

