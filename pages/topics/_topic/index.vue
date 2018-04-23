<template>
  <section class="hero">
    <banner :title="title" :subtitle="subtitle" />
    <div class="container">
      <nuxt-link to="/" class="back">
        <i class="fas fa-lg fa-angle-left"></i>
        Back
      </nuxt-link>
      <card-list :items="topics"/>
    </div>

  </section> 
  
</template>

<script>
import Banner from '~/components/Banner';
import CardList from '~/components/CardList';

export default {
  data () {
    return {
      title: this.$route.params.topic,
      subtitle: 'Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. ',
      // This would be replaced by a store or API call
      topics: [
        { id: 1, name: "Asset1", description: "This is everything about biocycle, the cycle bio"},
        { id: 2 , name: "Asset2", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"},
        { id: 3, name: "Asset3", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"},
        { id: 4 , name: "Asset4", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"}
      ]
    }
  },
  components: {
      Banner,
      CardList
  }
}
</script>
