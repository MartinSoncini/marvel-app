<template>
  <div>
    <input type="text" v-model="searchQuery" />
    <button @click="onSearch">Buscar</button>
  </div>
</template>

<script>
export default {
  name: "PageInput",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.searchQuery);
      this.searchQuery = "";
    },
  },
};
</script>

<style scoped>
button {
  color: black;
  border: solid 1px red;
  margin: 5px;
  padding: 5px;
}
</style>
