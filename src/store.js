import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showIndex:0,
    activeKey:0,
    user:{},
    menues:[],
    ordermenues:[],
    tolPrice:0,
    tolNum:0,
    orderPrice:0,
    orderNum:0,
    orderCode:"",
  },
  mutations: {
    // 初始化state.menues数据  如果JSON.parse(sessionStorage.getItem("menues")) 存在，则赋值给state
    intMenues(state){
      state.menues = JSON.parse(sessionStorage.getItem("menues"));
    },
    intUser(state){
      state.user = JSON.parse(sessionStorage.getItem("user"));
    },
    changeIndex(state,index){
      state.showIndex = index;
      sessionStorage.setItem("showIndex",index)
    },
    changeActiveKey(state,activeKey){
      state.activeKey = activeKey;
      sessionStorage.setItem("activeKey",activeKey)
    },
    saveUser(state, user){
      state.user = user;
      sessionStorage.setItem("user",JSON.stringify(user));
    },
    saveOrders(state,orderCode){
      state.orderCode = orderCode;
      state.ordermenues = state.menues;
      state.orderPrice = state.tolPrice;
      state.orderNum = state.tolNum;
      state.menues = [];
      state.tolPrice = 0;
      state.tolNum = 0;
      sessionStorage.removeItem("menues")
      sessionStorage.removeItem("sumPrice")
      sessionStorage.removeItem("sumNum")
      sessionStorage.setItem("orderCode",state.orderCode)
      sessionStorage.setItem("orderMenues",JSON.stringify(state.ordermenues));
      sessionStorage.setItem("orderPrice",state.orderPrice)
      sessionStorage.setItem("orderNum",state.orderNum)
    },
    changeNum(state, {menue,index}){
      let menues = state.menues
      // console.log(menues)
      menues[index].num = menue.num;
      sessionStorage.setItem("menues",JSON.stringify(menues));
      // console.log(JSON.parse(sessionStorage.getItem("menues")))
    },
    delMenue(state, index){
      let menues = state.menues
      menues.splice(index,1)
      sessionStorage.setItem("menues",JSON.stringify(menues));
      // console.log(JSON.parse(sessionStorage.getItem("menues")))
    },
    addMenue(state, menue){
      let menues = state.menues
      // console.log(menues)
      menues.push(menue)
      sessionStorage.setItem("menues",JSON.stringify(menues));
      // console.log(JSON.parse(sessionStorage.getItem("menues")))
    },
    sumPrice(state) {
      let sumPrice = 0;
      for (const menue of state.menues) {
        sumPrice += menue.num * menue.original_price;
      }
      state.tolPrice = sumPrice;
      sessionStorage.setItem("sumPrice",sumPrice)
    },
    sumNum(state) {
      let sumNum = 0;
      for (const menue of state.menues) {
        sumNum += menue.num;
      }
      state.tolNum = sumNum;
      sessionStorage.setItem("sumNum",sumNum)
    },
  },
  actions: {

  }
})
