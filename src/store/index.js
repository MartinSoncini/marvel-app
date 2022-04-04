import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardData: {},
    isOpenModal: false,
  },
  getters: {},
  mutations: {
    setCardData(state, data) {
      state.cardData = data;
    },
    setIsOpenModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
  },
  actions: {},
  modules: {},
});
