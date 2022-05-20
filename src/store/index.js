import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
  },
  getters: {
    // vuex에서 computed와 같이 사용
    fetchedUsers(state) {
      return state.users;
    },
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
  },
  actions: {
    async FETCH_NEWS(context) {
      const { data: newsListData } = await fetchNewsList();
      context.commit('SET_NEWS', newsListData);
    },
  },
});

export default store;
