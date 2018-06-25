<template>
  <div>
    <section class="hero">
      <banner
        :title="title"
        :image="bannerImage"
        :subtitle="subtitle"
      />
    </section>
    <section class="section">
      <div class="container is-fluid smf-container">
        <div class="columns">
          <div class="column wrap text-left is-half">
            <h3 class="title is-size-4-mobile is-size-4-tablet">The Ellen MacArthur Foundation</h3>
            <p>The <a href="https://www.ellenmacarthurfoundation.org/">Ellen MacArthur Foundation</a> was established in 2010 with the aim of accelerating the transition to the circular economy. Since its creation the charity has emerged as a global thought leader, establishing the circular economy on the agenda of decision makers across business, government and academia.</p>
          </div>
          <div
            id="image-1"
            class="column is-paddingless is-half">
            <div class="triangle-right"/>
          </div>
        </div>
        <div class="columns reverse-stack-mobile">
          <div class="column wrap text-right has-text-right-tablet is-half">
            <h3 class="title is-size-4-mobile is-size-4-tablet">Circular Economy Learning</h3>
            <p>We at the Ellen MacArthur Foundation are currently developing an <a href="https://www.ellenmacarthurfoundation.org/programmes/education/schmidt-macarthur-fellowship/application">exciting new initiative</a> to take circular economy learning to a wide audience, using our knowledge base and expertise to provide global reach. This tool has been designed as a prototype of our online learning platform and provides you, the learner, with the option to follow a curated path through the learning material or to browse the content freely. </p>
          </div>
          <div
            id="image-2"
            class="column is-paddingless is-half">
            <div class="triangle-left"/>
          </div>
        </div>
        <div class="columns">
          <div class="column wrap text-left is-half">
            <h3 class="title is-size-4-mobile is-size-4-tablet">Make Fashion Circular</h3>
            <p>In May 2017, the Ellen MacArthur Foundation launched <a href="https://www.ellenmacarthurfoundation.org/programmes/systemic-initiatives/make-fashion-circular">Make Fashion Circular</a> at the Copenhagen Fashion Summit. The initiative brings together organisations from across the industry, including leading fashion brands, cities, philanthropists, NGOs and innovators to collaborate and create a new textiles economy, aligned with the principles of the circular economy. </p>
          </div>
          <div
            id="image-3"
            class="column is-paddingless is-half">
            <div class="triangle-right"/>
          </div>
        </div>
      </div>
    </section>
    <div class="clear-float"/>
  </div>
</template>

<script>
import Banner from "~/components/Banner";

export default {
  components: {
    Banner
  },
  data: function() {
    return {
      title: "About this Learning Tool",
      subtitle:
        "Find out more about this prototype learning platform developed by the Ellen MacArthur Foundation as part of a new initiative taking circular economy learning to a wide audience.",
      bannerImage: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.smf-container {
  margin: 0;
  padding-bottom: 0;
}
.columns {
  margin-bottom: 18px;
  .column {
    &.text-left {
      background-color: #d8d8d8;
    }
    &.text-right {
      border-top: solid 10px #1c9bd6;
      order: 2;
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
.columns:last-child {
  margin-bottom: 0;
}
#image-1 {
  background: url("https://emf-assets-dev.s3.amazonaws.com/media/22/About-EMF-Web.jpg")
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#image-2 {
  background: url("https://emf-assets-dev.s3.amazonaws.com/media/22/About-CEL-Web.jpg")
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#image-3 {
  background: url("https://emf-assets-dev.s3.amazonaws.com/media/22/About-MFC-Web.jpg")
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#image-1,
#image-2,
#image-3 {
  height: 300px;
}

@include tablet() {
  #image-1,
  #image-2,
  #image-3 {
    height: 380px;
  }
  .columns {
    height: 380px;
    .column {
      position: relative;
      margin-right: 5px;
      padding: 2rem;
    }
  }
}
@include desktop() {
  .columns {
    .column {
      padding: 3rem 6rem;
    }
  }
}
</style>
