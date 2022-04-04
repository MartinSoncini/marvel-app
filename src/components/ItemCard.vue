<template>
  <div class="card" @click="openCard">
    <img class="img" :src="getImg" :alt="`imagen de ${getName}`" />
    <p>{{ getName }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ItemCard",
  props: {
    itemData: { type: Object, default: () => {} },
  },
  computed: {
    getName() {
      return this.itemData.name || this.itemData.title;
    },
    getImg() {
      const path = this.itemData.thumbnail.path;
      const extension = this.itemData.thumbnail.extension;
      return `${path}.${extension}`;
    },
  },
  methods: {
    openCard() {
      this.setCardData(this.itemData);
      this.setIsOpenModal();
    },
    ...mapMutations(["setCardData", "setIsOpenModal"]),
  },
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;
  width: 300px;
  margin: 5px;
  padding: 10px;
  border: solid 2px red;
  background-color: gray;
}
.img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
.description::-webkit-scrollbar {
  display: none;
}
</style>
