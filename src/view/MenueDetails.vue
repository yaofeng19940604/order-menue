<template>
  <div class="menue-details-wrap">
    <MyNav :title="menue.name"/>
    <div class="banner-wrap">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(img,index) in menue.banner_arr" :key="index"><img class="swipe-pic" :src="`http://vy2pn3.natappfree.cc/order_menue/public/upload/${img}`"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="text-wrap">
      <h6 class="name">{{menue.name}}</h6>
      <p class="price">￥{{menue.original_price}}</p>
      <van-stepper min="0" :value="menue.num || 0" @change="onChange"/>
      <h6>菜品介绍</h6>
      <p>{{menue.des}}</p>
    </div>
    <!-- <div class="cart-wrap">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button color="#fddf63" type="warning" text="加入购物车" />
        <van-goods-action-button color="#fddf63" type="danger" text="立即购买" />
      </van-goods-action>
    </div> -->
  </div>
</template>
<script>
import apiMenue from "../api/menue.js"
import { Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton, Stepper } from 'vant';
import MyNav from "../components/base/MyNav.vue"
export default {
  data: function() {
    return {
      menue:{},
    };
  },
  components: {
    "van-swipe-item":SwipeItem,
    "van-swipe":Swipe,
    "van-goods-action":GoodsAction,
    "van-goods-action-icon":GoodsActionIcon,
    "van-goods-action-button":GoodsActionButton,
    "van-stepper":Stepper,
    MyNav,
  },
  props: {},
  methods: {
    onChange(val){
        let id = this.menue.id;
        this.$set(this.menue, 'num', val)
        if(this.isOrder(id)){
          this.menue.num == 0 ? this.$store.commit('delMenue',this.menue): this.$store.commit('changeNum',this.menue);
        }else{
          this.$store.commit('addMenue',this.menue)
        }
        this.$store.commit("sumPrice")
        this.$store.commit("sumNum")
      },
      isOrder(id){
        var menues = this.$store.state.menues;
        for(var i = 0; i < menues.length; i++){
          if(menues[i].id == id){
            return true
          }
        }
        return false
      }
  },
  created(){
    let id = this.$route.params.id
    var menues = this.$store.state.menues;
    for(var i = 0; i < menues.length; i++){
      if(menues[i].id == id){
        this.menue = menues[i]
        return
      }
    }
    apiMenue.getMenueDetails(id).then(res=>{
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
      height: 300px;
    }
  }
  .text-wrap{
    position: relative;
    padding:0 12px;
    h6{
      line-height: 46px;
      font-size: 20px;
      height: 46px;
    }
    .price{
      line-height: 40px;
      font-size: 18px;
      color: $main-cl;
      border-bottom: 1PX $main-bdcl solid;
    }
    p{
      width: 351px;
      line-height: 24px;
      font-size: 13px;
    }
    .van-stepper{
      position: absolute;
      top: 55px;
      right: 30px;
    }
  }
}
</style>