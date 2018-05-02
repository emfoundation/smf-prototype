<template>
  <div class="columns is-multiline">
    <div :key="item.id" v-for="item in items" class="column is-one-third">
      <div class="card">
        <div class="card-header">
            <h2 class="card-header-title title">{{ item.name }}</h2>
        </div>
        <div class="card-content">
            <p>{{ item.description }}</p>
            <dark-button :url="assetUrl(item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkButton from "~/components/UI/DarkButton";

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    assetUrl(id) {
      return "/assets/" + id;
    }
  },
  components: {
    DarkButton
  }
};
</script>

<style scoped>
.columns {
  margin: 20px auto 50px auto;
}
.card {
  height: 300px;
}
.card-header-title {
  padding: 1.5rem;
}
.button {
  position: absolute;
  bottom: 0;
  margin: 20px 0;
}
i {
  margin-left: 10px;
}
</style>
