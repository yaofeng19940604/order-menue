<template>
  <div class="home-wrap">
    <div class="banner-wrap">轮播图</div>
    <div class="hot-wrap">热门菜品推荐</div>
    <div class="des-wrap">
      <h5 class="name"><van-icon name="send-gift-o"/>{{shop.name}}</h5>
      <p><van-icon name="location-o"/>地址：{{shop.address}}</p>
      <p><van-icon name="phone-o"/>电话：{{shop.phone}}</p>
      <p><van-icon name="clock-o"/>营业时间：{{shop.openingtime}}</p>
    </div>
  </div>
</template>

<script>
import apiShop from "@/api/shop.js"
import { Icon } from 'vant';
export default {
  data(){
    return {
      shop:{},
    }
  },
  methods: {
    
  },
  components: {
    "van-icon":Icon,
  },
  created(){
    apiShop.getShopDetails(1).then(res=>{
      this.shop = res;
    })
  },
}
</script>
<style lang="scss">
.home-wrap{
  .des-wrap{
    width: 357px;
    padding: 15px 9px;
    .name{
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      font-weight: 800;
      border-bottom: 1Px $main-bdcl solid;
      margin-bottom: 25px;
    }
    p{
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      border-bottom: 1Px $main-bdcl solid;
    }
    .van-icon{
      vertical-align: middle;
      font-size: 22px;
      margin: 0 10px;
      color: $main-cl;
    }
  }
}
</style>
