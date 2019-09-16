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
    changeNum(state, menue){
      for(let item in state.menues){
        if(item.id == menue.id){
          item.num = menue.num
        }
      }
      // console.log(state.menues)
    },
    addMenue(state, menue){
      state.menues.push(menue)
      // console.log(state.menues)
    },
    delMenue(state, menue){
      let menues = state.menues
      for(var i = 0; i < menues.length; i++){
        if(menues[i].id == menue.id){
          menues.splice(i,1)
        }
      }
      // console.log(state.menues)
    }
  },
  actions: {

  }
})
