import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    menues:[],
  },
  mutations: {
    saveUser(state, user){
      state.user = user;
    },
    addNum(state, menue){
      let menues = state.menues
      menues[menue.index].num = menue.num
    },
    addMenue(state, menue){
      let menues = state.menues
      menues.push(menue)
    }
  },
  actions: {

  }
})
