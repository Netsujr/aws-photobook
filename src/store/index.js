import { createStore } from "vuex";
import { Auth } from "aws-amplify";

export default createStore({
  state: {
    currentUser: null,
  },
  getters: {
    getCurrentUser: (state) => {
      return state.currentUser;
    },
  },
  mutations: {
    setCurrentUser: (state, user) => {
      state.currentUser = user;
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const user = await Auth.currentUserInfo();
        commit("setCurrentUser", user);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
