<template>
  <section class="hero">
    <banner :title="title" :subtitle="subtitle" />
    <div class="container">
      <back-link class="ml-3" link="/" />
      <topics-list :items="topics">
      </topics-list>
    </div>
  </section> 
  
</template>

<script>
import Banner from '~/components/Banner';
import TopicsList from '~/components/topics/TopicsList';
import BackLink from '~/components/UI/BackLink';

export default {
  asyncData (context, callback) {
    callback(null, {
      title: 'Topics',
      subtitle: 'Sed nisi neque, euismod sit amet augue id, cursus consectetur tellus. Praesent finibus facilisis massa. Morbi mattis nisi nibh, eget pulvinar turpis elementum nec. Morbi sit amet semper nunc. Cras at ligula sed turpis varius sodales. ',
      // This would be replaced by a store or API call
      // Get all topics: '/api/tag-groups'
      topics: [
        { id: 1, name: "Design", description: "Changing the way we think about making products, what if we could redesign everything?"},
        { id: 2, name: "Materials", description: "Materials affect everyone, it's time for change"},
        { id: 3, name: "Economics", description: "How does being Circular fit into the Economy? Find out"},
        { id: 4, name: "Business", description: "Money makes the world go round, lets change that"}
      ]
    })
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
  components: {
      Banner,
      TopicsList,
      BackLink,
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/main.scss';
</style>


