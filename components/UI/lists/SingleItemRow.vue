<template>
  <section>
    <div
      v-for="item in items"
      :key="item.id"
      :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"
      class="hero is-medium item overlay-dark is-dark">
      <div class="columns item-body">
        <div class="column is-half left-column">
          <h2 class="title is-1 has-text-weight-bold">{{ item.name }}</h2>
          <div
            v-if="item.parts"
            class="info">
            <div class="parts is-pulled-left mb-4">
              <span
                v-for="(dot,index) in item.parts"
                :key="index">
                <div
                  :class="index == 0 ? 'is-active' : ''"
                  class="dot"/>
              </span>
              <span
                v-if="item.parts > 1"
                class="is-size-6 has-text-weight-bold ml-2 mr-5 mb-1">{{ item.parts }} parts</span>
            </div>
            <div class="duration pb-1">
              <i class="fas fa-clock has-text-weight-normal is-size-2"/>
              <p class="has-text-weight-bold is-size-5 is-pulled-right duration-text">{{ item.duration }} h</p>
            </div>
          </div>
        </div>
        <div class="column is-half left-border p0 right-column">
          <p class="mb-4">{{ item.description }}</p>
          <!-- <nuxt-link :to="itemUrl(item.id)">
            <p class="subtitle">Start
              <span class="icon">
                <i class="fas fa-chevron-circle-right fa-lg arrow has-text-primary"/>
              </span>
            </p>
          </nuxt-link> -->
          <text-circle-button :link="itemUrl(item.id)">Start</text-circle-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextCircleButton from "~/components/UI/buttons/TextCircleButton";

export default {
  components: {
    TextCircleButton
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    itemUrl(id) {
      return this.$route.path + "/" + id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.item {
  overflow: hidden;
  background-size: cover;
  border-bottom: $smf-border;
}
.item-body {
  transition: 0.5s;
  padding: 3rem 3rem;
}
.overlay-dark {
  .item-body {
    background: rgba($emf, 0.6);
    &:hover {
      background: rgba($emf, 0.9);
    }
  }
  .arrow {
    color: white;
  }
}
.duration {
  display: inline-block;
  height: 41px;
  width: 85px;
}
.duration-text {
  margin-top: 5px;
}
.parts {
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
  .item-body {
    padding: 6rem 9rem;
  }
  .left-border {
    border-left: 2px solid white;
  }
  .left-column {
    padding-right: 3rem;
  }
  .right-column {
    padding-left: 3rem;
  }
}
</style>
