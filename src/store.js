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
      // console.log("changeNum")
      let menues = state.menues
      for(var i = 0; i < menues.length; i++){
        if(menues[i].id == menue.id){
          // console.log(menues[i].num , menue.num)
          // 这两个数据已经同步了，所以下面逻辑不对   再说，当数量为0时，执行addMenue事件   也不可取
          // if(menues[i].num > menue.num){
          //   state.tolPrice += menue.num * menue.original_price
          //   state.tolNum += menue.num
          // }else{
          //   state.tolPrice -= menue.num * menue.original_price
          //   state.tolNum -= menue.num
          // }
          menues[i].num = menue.num;
        }
      }
    },
    sumPrice(state) {
      let sumPrice = 0;
      for (const menue of state.menues) {
        sumPrice += menue.num * menue.original_price;
      }
      state.tolPrice = sumPrice;
    },
    sumNum(state) {
      let sumNum = 0;
      for (const menue of state.menues) {
        sumNum += menue.num;
      }
      state.tolNum = sumNum;
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
