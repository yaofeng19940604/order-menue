import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableId:1,
  },
  mutations: {
    saveTableId(state,id){
      state.tableId = id;
    }
  },
  actions: {

  }
})
