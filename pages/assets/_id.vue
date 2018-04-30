<template>
  <section>
    <banner :title="asset.name" :subtitle="subtitle" />
    <div class="container">
      <back-link link="/"/>
      <p class="date-uploaded has-text-weight-light">Uploaded on {{ asset.dateUploaded }}</p>
      <p class="mb-5">{{ asset.description }}</p>
      <div class="tags">
        <span :key="tag.id" v-for="tag in asset.tags" class="tag border-1 is-medium">{{ tag.name }}</span>
      </div>
    </div>
  </section>
</template>
<script>
import Banner from '~/components/Banner';
import BackLink from '~/components/UI/BackLink';

export default {
  asyncData (context, callback) {
    callback(null, {
      // Asset name would need to be retrieved from the API, for now it is taken from the route
      subtitle: 'Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. ',
      asset: {
        id: '1',
        name: 'This is a test asset',
        description: 'This would be a description about the asset perhaps some text that tells the user why this is the solution to all their problems. Or maybe its not.',
        dateUploaded: '21/09/2010',
        tags: [
          { id: 1, name: "Farming" },
          { id: 2, name: "Ships" },
        ]
      }
    })
  },
  components: {
    Banner,
    BackLink
  }

}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.date-uploaded {
  margin: 3% 0;
}
</style>
