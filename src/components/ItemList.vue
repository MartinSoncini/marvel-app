<template>
  <div class="list">
    <ItemCard
      v-for="item in itemsData.results"
      :key="item.id"
      :itemData="item"
    />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
export default {
  name: "ItemList",
  components: { ItemCard },
  props: {
    itemsData: { type: Object, default: () => {} },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
