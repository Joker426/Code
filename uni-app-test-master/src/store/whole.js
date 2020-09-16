export default {
  namespaced: true,
  state: {
    listsOne: [],
    listsTwo: [],
  },
  mutations: {
    add(state, obj) {
      state.listsOne = obj;
    },
    add2(state, obj) {
      state.listsTwo = obj;
    },

  },
  actions: {},
};
