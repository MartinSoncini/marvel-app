<template>
  <section>
    <p>PERSONAJES</p>
    <PageInput @search="searchCharacters" />
    <ItemList :itemsData="charactersData.data" />
  </section>
</template>

<script>
import { fetchData } from "@/services/fetchData";
import ItemList from "@/components/ItemList.vue";
import PageInput from "@/components/PageInput.vue";
export default {
  name: "CharactersView",
  components: {
    ItemList,
    PageInput,
  },
  data() {
    return {
      charactersData: {},
    };
  },
  async created() {
    this.charactersData = await fetchData("characters");
  },
  methods: {
    async searchCharacters(searchQuery) {
      this.charactersData = await fetchData("characters", 10, searchQuery);
    },
  },
};
</script>
