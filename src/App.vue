<template>
  <section id="app">
    <ModalWithCard v-show="isOpenModal" />
    <PageHeader />
    <router-view class="views" />
    <PageFooter />
  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import ModalWithCard from "@/components/ModalWithCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    PageHeader,
    PageFooter,
    ModalWithCard,
  },
  computed: {
    ...mapState(["isOpenModal"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
a {
  text-decoration: none;
}
.views {
  margin-top: 200px;
  margin-bottom: 100px;
}
</style>
