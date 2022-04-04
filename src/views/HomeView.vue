<template>
  <section>
    <div class="principal-div">
      <router-link to="/characters">PERSONAJES </router-link>
      <div><ItemList :itemsData="charactersData.data" /></div>
    </div>
    <div class="principal-div">
      <div><ItemList :itemsData="comicsData.data" /></div>
      <router-link to="/comics">COMICS </router-link>
    </div>
    <div class="principal-div">
      <router-link to="/series">SERIES</router-link>
      <div><ItemList :itemsData="seriesData.data" /></div>
    </div>
  </section>
</template>

<script>
import { fetchData } from "@/services/fetchData";
import ItemList from "@/components/ItemList.vue";
export default {
  components: { ItemList },
  data() {
    return {
      charactersData: {},
      comicsData: {},
      seriesData: {},
    };
  },
  async created() {
    this.charactersData = await fetchData("characters", 3);
    this.comicsData = await fetchData("comics", 3);
    this.seriesData = await fetchData("series", 3);
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.principal-div {
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  border: solid 2px black;
  background-color: #2e2b2b;
  padding: 10px;
  margin: 10px;
}
a {
  color: white;
  border: solid 1px red;
  margin: 5px;
  padding: 5px;
}
</style>
