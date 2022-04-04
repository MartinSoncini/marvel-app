<template>
  <section>
    <p>COMICS</p>
    <PageInput @search="searchComics" />
    <ItemList :itemsData="comicsData.data" />
  </section>
</template>

<script>
import { fetchData } from "@/services/fetchData";
import ItemList from "@/components/ItemList.vue";
import PageInput from "@/components/PageInput.vue";
export default {
  name: "ComicsView",
  components: {
    ItemList,
    PageInput,
  },
  data() {
    return {
      comicsData: {},
    };
  },
  async created() {
    this.comicsData = await fetchData("comics");
  },
  methods: {
    async searchComics(searchQuery) {
      this.comicsData = await fetchData("comics", 10, searchQuery);
    },
  },
};
</script>
