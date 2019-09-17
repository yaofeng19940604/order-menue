import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    menues:[],
    tolPrice:0,
    tolNum:0,
  },
  mutations: {
    saveUser(state, user){
      state.user = user;
    },
    changeNum(state, menue){
      let menues = state.menues
      for(var i = 0; i < menues.length; i++){
        if(menues[i].id == menue.id){
          if(menues[i].num > menue.num){
            state.tolPrice += menue.num * menue.original_price
            state.tolNum += menue.num
          }else{
            state.tolPrice -= menue.num * menue.original_price
            state.tolNum -= menue.num
          }
          menues[i].num = menue.num;
        }
      }
    },
    addMenue(state, menue){
      state.menues.push(menue)
    },
    delMenue(state, menue){
      let menues = state.menues
      for(var i = 0; i < menues.length; i++){
        if(menues[i].id == menue.id){
          menues.splice(i,1)
        }
      }
    }
  },
  actions: {

  }
})
