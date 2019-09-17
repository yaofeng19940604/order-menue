<template>
  <div class="cart-wrap">
    <h5 class="table">您当前所选的桌号是：{{user.name}}</h5>
    <div v-for="menue in orders" :key="menue.id">
      <GoodsStyle v-show="menue.num" :item="menue"/>
    </div>
    <van-submit-bar
      :price="pricetol"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import GoodsStyle from "../components/goods/GoodsStyle1.vue"
import { SubmitBar } from 'vant';
export default {
  data(){
    return {
      orders:{},
      user:{},
      pricetol:0,
    }
  },
  components: {
    GoodsStyle,
    "van-submit-bar":SubmitBar,
  },
  methods:{
    onSubmit(){

    },
  },
  mounted(){
    this.orders = this.$store.state.menues;
    this.user = this.$store.state.user;
    // this.pricetol = this.$store.state.tolPrice*100
  }
}
</script>
<style lang="scss">
.cart-wrap{
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
