import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    success: 0,
    fails: 0,
  },
  getters: {
    getSuccess: state => state.success,
    getFails: state => state.fails,
  },
  mutations: {
    fetchSuccess(state, payload) {
      state.success = payload
    },
    fetchFails(state, payload) {
      state.fails = payload
    },
    incrementSuccess(state) {
      state.success++
    },
    incrementFails(state) {
      state.fails++
    },
  },
  actions: {
    fetchSuccess({ commit }) {
      const localSuccess = JSON.parse(localStorage.getItem('success'))
      commit('fetchSuccess', localSuccess || 0)
    },
    fetchFails({ commit }) {
      const localFails = JSON.parse(localStorage.getItem('fails'))
      commit('fetchFails', localFails || 0)
    },
    incrementSuccess({ commit, state }) {
      localStorage.setItem('success', state.success + 1)
      commit('incrementSuccess')
    },
    incrementFails({ commit, state }) {
      localStorage.setItem('fails', state.fails + 1)
      commit('incrementFails')
    }
  }
})
