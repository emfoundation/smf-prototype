<template>
  <section class="hero">
    <banner
      :title="title"
      :image="bannerImage"
    />
    <div class="columns">
      <div class="column wrap text-left is-half">
        <h3 class="title is-4">The Ellen MacArthur Foundation</h3>
        <p>The <a href="https://www.ellenmacarthurfoundation.org/">Ellen MacArthur Foundation</a> was established in 2010 with the aim of accelerating the transition to the circular economy. Since its creation the charity has emerged as a global thought leader, establishing the circular economy on the agenda of decision makers across business, government and academia.</p>
      </div>
      <div
        id="image-1"
        class="column is-paddingless is-half">
        <div class="triangle-right"/>
      </div>
    </div>
    <div class="columns">
      <div
        id="image-2"
        class="column is-paddingless is-half">
        <div class="triangle-left"/>
      </div>
      <div class="column wrap text-right has-text-right is-half">
        <h3 class="title is-4">Circular Economy Learning</h3>
        <p>We at the Ellen MacArthur Foundation are currently developing an <a href="https://www.ellenmacarthurfoundation.org/programmes/education/schmidt-macarthur-fellowship/application">exciting new initiative</a> to take circular economy learning to a wide audience, using our knowledge base and expertise to provide global reach. This tool has been designed as a prototype of our online learning platform and provides you, the learner, with the option to follow a curated path through the learning material or to browse the content freely.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column wrap text-left is-half">
        <h3 class="title is-4">Make Fashion Circular</h3>
        <p>In May 2017, the Ellen MacArthur Foundation launched <a href="https://www.ellenmacarthurfoundation.org/programmes/systemic-initiatives/make-fashion-circular">Make Fashion Circular</a> at the Copenhagen Fashion Summit. The initiative brings together organisations from across the industry, including brands, cities, philanthropists, NGOs and innovators to collaborate and create a new textiles economy, aligned with the principles of the circular economy.</p>
      </div>
      <div
        id="image-3"
        class="column is-paddingless is-half">
        <div class="triangle-right"/>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from "~/components/Banner";

export default {
  components: {
    Banner
  },
  data: function() {
    return {
      title: "About Us",
      bannerImage: "https://placeimg.com/1000/300/arch"
    };
  }
};
</script>

<style lang="scss" scoped>
.columns {
  height: 380px;
  .column {
    position: relative;
    margin: 5px;
    &.text-left {
      background-color: #d8d8d8;
    }
    &.text-right {
      border-top: solid 10px #1c9bd6;
    }
    .triangle-left {
      position: absolute;
      top: 40%;
      right: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 30px 20px 30px 0;
      border-color: transparent #fffbff transparent transparent;
    }
    .triangle-right {
      position: absolute;
      top: 40%;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 30px 0px 30px 20px;
      border-color: transparent transparent transparent #fffbff;
    }
  }
}
#image-1 {
  background: url("https://placeimg.com/300/200/nature") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#image-2 {
  background: url("https://placeimg.com/300/200/nature") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#image-3 {
  background: url("https://placeimg.com/300/200/nature") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
