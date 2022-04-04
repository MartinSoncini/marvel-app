<template>
  <section>
    <p>SERIES</p>
    <PageInput @search="searchSeries" />
    <ItemList :itemsData="seriesData.data" />
  </section>
</template>

<script>
import { fetchData } from "@/services/fetchData";
import ItemList from "@/components/ItemList.vue";
import PageInput from "@/components/PageInput.vue";
export default {
  name: "SeriesView",
  components: {
    ItemList,
    PageInput,
  },
  data() {
    return {
      seriesData: {},
    };
  },
  async created() {
    this.seriesData = await fetchData("series");
  },
  methods: {
    async searchSeries(searchQuery) {
      this.seriesData = await fetchData("series", 10, searchQuery);
    },
  },
};
</script>
