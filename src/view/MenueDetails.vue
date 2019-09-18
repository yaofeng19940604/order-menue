<template>
  <div class="menue-details-wrap">
    <MyNav :title="menue.name"/>
    <div class="banner-wrap">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(img,index) in menue.banner_arr" :key="index"><img class="swipe-pic" :src="`http://yzcf97.natappfree.cc/order_menue/public/upload/${img}`"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="text-wrap">

    </div>
    <div class="cart-wrap">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button color="#fddf63" type="warning" text="加入购物车" />
        <van-goods-action-button color="#fddf63" type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import apiMenue from "../api/menue.js"
import { Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton, } from 'vant';
import MyNav from "../components/base/MyNav.vue"
export default {
  data: function() {
    return {
      menueId:0,
      menue:{},
    };
  },
  components: {
    "van-swipe-item":SwipeItem,
    "van-swipe":Swipe,
    "van-goods-action":GoodsAction,
    "van-goods-action-icon":GoodsActionIcon,
    "van-goods-action-button":GoodsActionButton,
    MyNav,
  },
  props: {},
  methods: {},
  created(){
    this.menueId = this.$route.params.id
    apiMenue.getMenueDetails(this.menueId).then(res=>{
      console.log(res)
      this.menue = res
    })
  }
};
</script>

<style lang="scss">
.menue-details-wrap{
  padding-top: 46px;
  .banner-wrap{
    width: 100%;
    .swipe-pic{
      width: 100%;
      height: 375px;
    }
  }
}
</style>