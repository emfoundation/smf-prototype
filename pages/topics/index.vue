<template>
  <section class="hero">
    <banner :title="title" :subtitle="subtitle" />
    <div class="container">
      <back-link link="/" />
      <topics-list :items="topics">
      </topics-list>
    </div>
  </section> 
  
</template>

<script>
import Banner from '~/components/Banner';
import TopicsList from '~/components/topics/TopicsList';
import BackLink from '~/components/UI/BackLink';
import DarkButton from '~/components/UI/DarkButton';

export default {
  asyncData (context, callback) {
    callback(null, {
      title: 'Topics',
      subtitle: 'Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. ',
      // This would be replaced by a store or API call
      // Get all topics: '/api/tag-groups'
      topics: [
        { id: 1, name: "Biocycle", description: "This is everything about biocycle, the cycle bio"},
        { id: 2, name: "Superman", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"},
        { id: 3, name: "Super", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"},
        { id: 4, name: "Ice Lollies", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"}
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
      DarkButton
  }
}
</script>

