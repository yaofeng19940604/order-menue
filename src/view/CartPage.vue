<template>
  <div class="cart-wrap">
    <div class="cart-header">
      <van-cell title="桌号" is-link :value="table" @click="onClick"/>
      <p v-show="isHas">您还未选择菜品</p>
    </div>
    <div class="menues-wrap">
      <div v-for="menue in orders" :key="menue.id">
        <GoodsStyle1 v-show="menue.num" :item="menue" @mychange="onChange"/>
      </div>
    </div>
    <van-submit-bar
      :price="pricetol"
      button-text="提交订单"
      @submit="onSubmit"
    />
    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />
  </div>
</template>

<script>
import GoodsStyle1 from "../components/goods/GoodsStyle1.vue"
import { SubmitBar, Cell, ActionSheet, Toast  } from 'vant';
export default {
  data(){
    return {
      isHas:true,
      orders:{},
      user:{},
      pricetol:0,
      tolNum:0,
      table:"",
      show: false,
      actions: [
        { name: '一号桌' },
        { name: '二号桌' },
        { name: '三号桌' },
        { name: '四号桌' },
        { name: '五号桌' },
        { name: '六号桌' },
        { name: '七号桌' },
        { name: '八号桌' },
        { name: '九号桌' },
      ],
    }
  },
  components: {
    GoodsStyle1,
    "van-submit-bar":SubmitBar,
    "van-cell":Cell,
    "van-action-sheet":ActionSheet,
  },
  methods:{
    onSubmit(){
      let state = this.$store.state
      if(!state.user.id){
        this.show = true;
        return
      }
      if(state.menues.length==0){
        Toast("请选择菜品后再提交订单");
        return
      }
      if(JSON.parse(sessionStorage.getItem("orderMenues"))){
        Toast("您已经提交过订单，请勿重复提交");
        this.$router.push("UserPage")
        this.$store.commit('changeIndex',3)
        return
      }
      let params = {}
      var outTradeNo="";  //订单号
      for(var i=0;i<6;i++){
          outTradeNo += Math.floor(Math.random()*10);
      }
      outTradeNo = new Date().getTime() + outTradeNo;  //时间戳，用来生成订单号。
      params.order_id = outTradeNo;
      params.user_id = state.user.id
      params.menues = []
      for(let menue of state.menues){
        let item = {};
        item.id = menue.id;
        item.num = menue.num;
        params.menues.push(item)
      }
      this.$axios.post("/order/saveOrder",params)
      .then(res => {
        if(res.data.code == 200){
          this.$store.commit('saveOrders',outTradeNo)
          this.orders={};
          this.pricetol = 0;
          this.tolNum = 0;
          this.$router.push("UserPage")
          this.$store.commit('changeIndex',3)
        }
      })
    },
    onChange(){
      this.pricetol = this.$store.state.tolPrice*100
      this.tolNum = this.$store.state.tolNum
    },
    onClick(){
      this.show = true;
    },
    onSelect(item,index) {
      this.show = false;
      this.table = item.name;
      // console.log(item,index)
      this.$axios.post("user/matchingNum",{
          id: index+1,
      }).then(res=>{
        this.user = res.data;
        this.$store.commit('saveUser',this.user)
      })
      Toast(item.name);
    },
  },
  watch:{
    orders:function(val){
      if(val.length != 0){
        this.isHas = false;
      }else{
        this.isHas = true;
      }
    }
  },
  created(){
    // console.log("created")
    // orders user  在app.vue 中created已经初始化过
    this.orders = this.$store.state.menues;
    this.user = this.$store.state.user;
    this.pricetol = sessionStorage.getItem("sumPrice")*100 || this.$store.state.tolPrice*100
    this.tolNum = sessionStorage.getItem("sumNum") || this.$store.state.tolNum
    this.table = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")).name : "请选择当前桌号"
  },
  mounted(){
    // console.log("mounted")
  }
}
</script>
<style lang="scss">
.cart-wrap{
  height: 100%;
  padding-top: 45px;
  padding-bottom: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .cart-header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    p{
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 100px;
    }
  }
  .menues-wrap{
    flex-grow: 0;
    overflow: auto;
  }
  .table{
    font-size: 20px;
    line-height: 50px;
    height: 50px;
  }
  .van-submit-bar{
    bottom: 55px;
  }
}
</style>
