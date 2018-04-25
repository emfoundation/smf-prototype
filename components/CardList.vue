<template>
  <div class="columns is-multiline">
    <div :key="item.id" v-for="item in items" class="column is-one-third">
      <div class="card">
        <div class="card-header">
            <h2 class="card-header-title title">{{ item.name }}</h2>
        </div>
        <div class="card-content">
            <p>{{ item.description }}</p>
            <button @click="onLoadItem(item.name)" class="button is-dark">
            View  
            <i class="fas fa-lg fa-angle-right"></i>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseUrl: '',
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    onLoadItem(slug) {
      // Sends the user to the base path currently on, with the item param appended onto the end
      var baseUrl = this.$router.currentRoute.path + '/';
      // this.$router.push(this.baseUrl + id )
      slug = this.$options.filters.kebab(slug);
      this.$router.push(this.baseUrl + slug);

    }
  },
}
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

