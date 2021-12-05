
import { createStore } from 'vuex';

export const Store = createStore({
  state: {
    title: 'Sample Project',

    // hypothetical jwt token
    token: localStorage.getItem('token'||''),

    // hypothetical userData
    userData: JSON.parse(localStorage.getItem('userData'))||{}
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {}
});

