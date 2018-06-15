<template>
  <div>
    <banner
      :title="learnerJourney.name"
      back-to="/learning-paths"
    />
    <div
      v-if="chapters.length > 0"
      class="mb-5">
      <div class="chapter-nav-background mb-3">
        <div class="wrap pt-0 pb-0">
          <nav
            class="pagination is-large"
            role="navigation"
            aria-label="pagination">
            <a
              :disabled="chapterIndex === 0"
              class="pagination-previous is-marginless is-hidden-tablet chapter-nav-previous"
              @click="prevChapter(chapterIndex)">
              <span class="icon">
                <i class="fas fa-angle-left"/>
              </span>
            </a>
            <ul class="pagination-list chapter-nav">
              <div
                class="pagination-link chapter-nav-link is-marginless chapter-part">
                <span class="is-size-5 has-text-weight-bold">
                  Chapter:
                </span>
              </div>
              <div
                v-for="(chapter,index) in chapters"
                :key="chapter.id"
                :class="chapterIndex === index ? 'is-current': ''"
                class="pagination-link chapter-nav-link is-marginless"
                @click.stop.prevent="showChapter(index)">
                <div>
                  <span class="is-size-5">
                    {{ index + 1 }}
                  </span>
                </div>
                <div class="container chapter-nav-info pt-2">
                  <div class="">
                    {{ getChapterTitle(index) }}
                  </div>
                </div>
              </div>
            </ul>
            <a
              :disabled="chapterIndex > chapters.length -2"
              class="pagination-next is-marginless is-hidden-tablet chapter-nav-next"
              @click="nextChapter(chapterIndex)">
              <span class="icon">
                <i class="fas fa-angle-right"/>
              </span>
            </a>
          </nav>
        </div>
      </div>
      <div class="wrap">
        <h3 class="title is-5 mb-2 has-text-weight-bold mt-3">
          Chapter {{ chapterIndex + 1 }} of {{ chapters.length }}:
        </h3>
        <nuxt-child :key="$route.path" />
        <div class="chapter-nav-background mt-5">
          <div class="pt-0 pb-0">
            <nav class="pagination is-centered is-large">
              <a
                :disabled="chapterIndex === 0"
                class="pagination-previous is-marginless chapter-nav-previous chapter-prev-next-box"
                @click="prevChapter(chapterIndex)">
                <span class="icon">
                  <i class="fas fa-angle-left"/>
                </span>
              </a>
              <div class="pagination-list chapter-prev-next">
                <div
                  :class="{ 'is-disabled': chapterIndex === 0 }"
                  class="chapter-prev-next-box pagination-link is-marginless">
                  <span class="is-size-5 has-text-weight-bold">
                    Previous <span class="is-hidden-mobile">Chapter</span>
                  </span>
                </div>
                <div
                  :class="{ 'is-disabled': chapterIndex > chapters.length -2 }"
                  class="chapter-prev-next-box pagination-link is-marginless">
                  <span class="is-size-5 has-text-weight-bold">
                    Next <span class="is-hidden-mobile">Chapter</span>
                  </span>
                </div>
              </div>
              <a
                :disabled="chapterIndex > chapters.length -2"
                class="pagination-next is-marginless chapter-nav-next chapter-prev-next-box"
                @click="nextChapter(chapterIndex)">
                <span class="icon">
                  <i class="fas fa-angle-right"/>
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="wrap mb-5 empty-page">
      <h1 class="title is-4 is-italic has-text-centered">Sorry, this Learning Path has no Chapters! Please come back later...</h1>
    </div>
  </div>
</template>

<script>
import Banner from "~/components/Banner";

export default {
  components: {
    Banner
  },
  data() {
    return {
      chapterIndex: 0
    };
  },
  head() {
    return {
      title: this.getChapterTitle(this.chapterIndex)
    };
  },
  watch: {
    $route(to, from) {
      this.setChapterIndex(to.params.chapterId);
    }
  },
  created() {
    this.setChapterIndex(this.currentChapterId);
  },
  methods: {
    getChapterTitle(index) {
      return this.chapters[index] ? this.chapters[index].title : "Chapter";
    },
    setChapterIndex(currentChapterId) {
      let chapter = this.chapters.find(el => +el.id === +currentChapterId);
      this.chapterIndex = this.chapters.indexOf(chapter);
    },
    showChapter(index) {
      const chapterId = this.chapters[index].id;
      this.$router.push({
        name: "learning-paths-id-chapterId",
        params: {
          id: this.learnerJourney.id,
          chapterId: chapterId
        }
      });
    },
    nextChapter(index) {
      if (index < this.chapters.length - 1) {
        this.chapterIndex += 1;
        this.showChapter(this.chapterIndex);
      }
    },
    prevChapter(index) {
      if (index > 0) {
        this.chapterIndex -= 1;
        this.showChapter(this.chapterIndex);
      }
    }
  },
  asyncData(context) {
    let getRequests = [
      context.$axios.get(
        process.env.API_BASE_URL +
          "/chapters/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/learner-journey/" +
          context.params.id +
          "/"
      ),
      context.$axios.get(
        process.env.API_BASE_URL +
          "/learner-journeys/" +
          context.params.id +
          "/"
      )
    ];

    let returnedData = Promise.all(getRequests);

    return returnedData
      .then(res => {
        let chapters = Array.isArray(res[0].data) ? res[0].data : [res[0].data];
        let learnerJourney = res[1].data;

        return {
          chapters,
          learnerJourney,
          currentChapterId: context.params.chapterId
        };
      })
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
.min-width {
  width: 100px;
}
.empty-page {
  height: 50vh;
}
.chapter-nav-background {
  height: 52px;
  background-color: $light-grey;
  border: 3px solid transparent;
}
.chapter-nav-link {
  border-radius: 0;
  border-color: white;
  background-color: $light-grey;
  display: none;
}
.chapter-nav-link.is-current,
.chapter-nav-link.chapter-part {
  display: block;
}
.chapter-nav-previous,
.chapter-nav-next {
  border: 1px solid white;
}
.chapter-nav-info {
  display: none;
}
.chapter-prev-next {
  justify-content: space-between !important;
  flex-grow: 1 !important;
}
.chapter-prev-next-box {
  border-radius: 0;
  border-color: white;
  color: white;
  background: $emf;
  &.is-disabled {
    opacity: 0.5;
  }
}
a.chapter-prev-next-box {
  &:hover {
    background: $primary;
  }
}
@include tablet() {
  .main-text {
    width: 80%;
  }
  .chapter-nav-link {
    display: block;
    .chapter-nav-info {
      min-height: 70px;
      z-index: 2;
      position: absolute;
      top: 52px;
      left: -216px;
      width: 486px;

      background-color: $secondary;
    }
    &:hover {
      background-color: $secondary;
      color: white;
      .chapter-nav-info {
        display: block;
      }
    }
  }
}
@include fullhd() {
  .main-text {
    width: 60%;
  }
}
</style>
