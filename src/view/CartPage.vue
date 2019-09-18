<template>
  <div class="cart-wrap">
    <div class="cart-header">
      <h5 class="table">您当前所选的桌号是：{{user.name}}</h5>
    </div>
    <div v-for="menue in orders" :key="menue.id">
      <GoodsStyle1 v-show="menue.num" :item="menue" @mychange="onChange"/>
    </div>
    <van-submit-bar
      :price="pricetol"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import GoodsStyle1 from "../components/goods/GoodsStyle1.vue"
import { SubmitBar } from 'vant';
export default {
  data(){
    return {
      orders:{},
      user:{},
      pricetol:0,
      tolNum:0,
    }
  },
  components: {
    GoodsStyle1,
    "van-submit-bar":SubmitBar,
  },
  methods:{
    onSubmit(){

    },
    onChange(){
      this.pricetol = this.$store.state.tolPrice*100
      this.tolNum = this.$store.state.tolNum
    }
  },
  watch:{
    
  },
  created(){
    // console.log("created")
    this.orders = this.$store.state.menues;
    this.user = this.$store.state.user;
    this.pricetol = this.$store.state.tolPrice*100
    this.tolNum = this.$store.state.tolNum
  },
  mounted(){
    // console.log("mounted")
  }
}
</script>
<style lang="scss">
.cart-wrap{
  height: 100%;
  overflow: auto;
  .table{
    font-size: 20px;
    line-height: 50px;
    height: 50px;
  }
  .van-submit-bar{
    bottom: 58px;
  }
}
</style>
