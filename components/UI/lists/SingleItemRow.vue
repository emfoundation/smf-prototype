<template>
  <section>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"
      :class="index % 2 == 0 ? 'overlay-white is-light' : 'overlay-blue is-dark'"
      class="hero is-medium item">
      <div class="columns item-body wrap">
        <div class="column is-half left-column">
          <h2 class="title is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-weight-normal">{{ item.name }}</h2>
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
          <text-circle-button
            :circle-colour="index % 2 ==0 ? 'primary' : 'white'"
            :text-colour="index % 2 ==0 ? 'dark' : 'light'"
            :link="itemUrl(item.id)">Start</text-circle-button>
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
.item {
  overflow: hidden;
  background-size: cover;
  border-bottom: $smf-border;
}
.item-body {
  transition: $smf-transition;
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
.overlay-blue {
  .item-body {
    background: rgba($primary, 0.8);
    &:hover {
      background: rgba($primary, 0.9);
    }
  }
  .arrow {
    color: white;
  }
}
.overlay-white {
  .item-body {
    background: rgba(white, 0.8);
    &:hover {
      background: rgba(white, 0.9);
    }
  }
  .arrow {
    color: white;
  }
  .dot {
    border: 1px solid $secondary;
  }
  .dot.is-active {
    background-color: $secondary;
  }
}
@include tablet() {
  .item-body {
    padding-top: 7rem;
    padding-bottom: 8rem;
  }
  .left-border {
    border-left: 2px solid white;
  }
  .overlay-white {
    .left-border {
      border-left: 2px solid $secondary;
    }
  }
  .left-column {
    padding-right: 3rem;
  }
  .right-column {
    padding-left: 3rem;
  }
}
</style>
