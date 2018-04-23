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
      title: 'Topics',
      subtitle: 'Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. ',
      // This would be replaced by a store or API call
      topics: [
        { id: 1, name: "Biocycle", description: "This is everything about biocycle, the cycle bio"},
        { id: 2 , name: "Superman", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"},
        { id: 3, name: "Super", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"},
        { id: 4 , name: "IceLollies", description: "Superman is also known as clark kent, but everybody knows that because he looks the same"}
      ]
    }
  },
  components: {
      Banner,
      CardList
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/main.scss';

  .back {
    margin: 0.75rem;
  }

</style>
