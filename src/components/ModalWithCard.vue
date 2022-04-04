<template>
  <div class="modal">
    <ItemCard :itemData="cardData" />
    <p @click="setIsOpenModal">X</p>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "ModalWithCard",
  components: {
    ItemCard,
  },
  computed: {
    ...mapState(["cardData"]),
  },
  methods: {
    ...mapMutations(["setIsOpenModal"]),
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(10px);
}
p {
  border: solid 1px red;
  padding: 10px;
  background-color: gray;
}
</style>
