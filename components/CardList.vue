<template>
  <div class="columns is-multiline">
    <div :key="item.id" v-for="item in items" class="column is-one-third">
      <div class="card">
        <div class="card-header">
            <h2 class="card-header-title title">{{ item.name }}</h2>
        </div>
        <div class="card-content">
            <p>{{ item.description }}</p>
            <button @click="onLoadTopic(item.name)" class="button is-dark">
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
    items: '',
  },
  methods: {
    onLoadTopic(id) {
      this.$router.push('/topics/' + id )
    }
  },
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px auto;
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

