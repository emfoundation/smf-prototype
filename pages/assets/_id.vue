<template>
  <section>
    <banner :title="asset.name" :subtitle="subtitle" />
    <div class="container">
      <back-link link="/"/>
      <p class="date-uploaded has-text-weight-light">Uploaded on {{ asset.dateUploaded }}</p>
      <p class="mb-5 main-text">{{ asset.description }}</p>
      <div class="tags">
        <span :key="tag.id" v-for="tag in asset.tags" class="tag border-1 is-medium">{{ tag.name }}</span>
      </div>
    </div>
  </section>
</template>
<script>
import Banner from "~/components/Banner";
import BackLink from "~/components/UI/BackLink";

export default {
  asyncData(context, callback) {
    callback(null, {
      // Asset name would need to be retrieved from the API, for now it is taken from the route
      subtitle:
        "How can we change our linear ways and kickstart the Circular Economy from the very beginning, by leveraging Design thinking.",
      asset: {
        id: "1",
        name: "Designing for a Circular Economy",
        description:
          "Maecenas nec libero sit amet diam tincidunt mattis. Ut molestie justo eget turpis sodales aliquam. Phasellus scelerisque sapien fringilla lorem imperdiet, at mattis ligula mollis. Duis lobortis blandit tellus ac ullamcorper. Suspendisse id sem consequat, auctor diam non, sollicitudin ipsum. Ut molestie tincidunt felis, in euismod orci. Suspendisse placerat augue tellus. Suspendisse mollis neque massa, id placerat est fermentum id. Sed ac congue nisi, sed auctor enim. Donec et pharetra libero, nec fermentum erat. Sed vel erat pretium, vestibulum elit ut, suscipit enim. ",
        dateUploaded: "21st September, 2010",
        tags: [{ id: 1, name: "Farming" }, { id: 2, name: "Ships" }]
      }
    });
  },
  components: {
    Banner,
    BackLink
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.date-uploaded {
  margin: 3% 0;
}
.main-text {
  width: 60%;
}
</style>
