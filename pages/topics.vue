<template>
  <section class="hero">
    <Banner :title="title" :subtitle="subtitle" />
  </section>
</template>

<script>
import Banner from '~/components/Banner';
export default {
  data () {
    return {
      title: 'Topics',
      subtitle: 'Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. '
    }
  },

    components: {
        Banner
    }

}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/main.scss';

  // Mobile-first classes


</style>
