<template>
  <section>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"
      :class="(index % 2 == 0 ? 'overlay-light is-light' : 'overlay-dark is-dark')"
      class="hero is-medium learningpath">
      <div class="columns learningpath-body">
        <div class="column">
          <h2 class="title has-text-weight-bold">{{ item.name }}</h2>
          <div class="info">
            <div class="chapters is-pulled-left mb-4">
              <span
                v-for="(dot,index) in item.parts"
                :key="index">
                <div
                  :class="index == 0 ? 'is-active' : ''"
                  class="dot"/>
              </span>
              <span
                v-if="item.parts > 1"
                class="is-size-6 ml-2 mr-5 mb-1">{{ item.parts }} parts</span>
            </div>
            <div class="duration pb-1">
              <i class="fas fa-clock has-text-weight-normal is-size-2"/>
              <p class="ml-2 is-pulled-right duration-text">{{ item.duration }}h</p>
            </div>
          </div>
        </div>
        <div class="column left-border">
          <p class="mb-4">{{ item.description }}</p>
          <nuxt-link :to="learningpathUrl(item.id)">
            <p class="subtitle">View
              <i class="fas fa-chevron-circle-right fa-lg arrow"/>
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DarkButton from "~/components/UI/DarkButton";

export default {
  components: {
    DarkButton
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    learningpathUrl(id) {
      return "/learnerjourneys/" + id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.learningpath {
  overflow: hidden;
  background-size: cover;
}
.learningpath-body {
  transition: 0.5s;
  padding: 3rem 3rem;
}
.overlay-light {
  .learningpath-body {
    background: rgba(222, 222, 222, 0.6);
    &:hover {
      background: rgba(222, 222, 222, 0.9);
    }
  }
}
.overlay-dark {
  .learningpath-body {
    background: rgba(0, 0, 0, 0.6);
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
  .arrow {
    color: white;
  }
}
.duration {
  display: inline-block;
  height: 41px;
  width: 70px;
}
.duration-text {
  margin-top: 8px;
}
.chapters {
  margin-top: 9px;
  padding-top: 1px;
}
.dot {
  height: 15px;
  width: 15px;
  border: 1px solid white;
  border-radius: 7.5px;
  margin-right: 5px;
  display: inline-block;
}
.dot.is-active {
  background-color: white;
}
@include tablet() {
  .learningpath-body {
    padding: 9rem 9rem;
  }
}
</style>
