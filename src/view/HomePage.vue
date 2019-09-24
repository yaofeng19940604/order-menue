<template>
  <div class="home-wrap">
    <div class="header-search">
      <van-search
        class="search"
        v-model="value"
        placeholder="请输入菜单名"
        background="#3298ed"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
    <div class="banner-wrap">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(img,index) in shop.banner_list" :key="index"><img class="swipe-pic" :src="`http://hsjxww.natappfree.cc/order_menue/public/upload/${img}`"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="hot-wrap">
      <h4 class="hot-tittle">热卖推荐</h4>
      <div class="hot-menues-wrap">
        <div class="hot-menue-wrap" v-for="menue in hotmenues" :key="menue.id">
            <GoodsStyle2 :item="menue"/>
        </div>
      </div>
    </div>
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
import apiMenue from "@/api/menue.js"
import GoodsStyle2 from "../components/goods/GoodsStyle2.vue"
import { Icon, Swipe, SwipeItem, Search } from 'vant';
export default {
  data(){
    return {
      shop:{},
      value:"",
      hotmenues:[],
    }
  },
  methods: {
    onSearch(val){
      this.$router.push({name:"SearchPage",params:{words:val}})
    },
    onCancel(){
      this.value = ""
    }
  },
  components: {
    "van-icon":Icon,
    "van-swipe-item":SwipeItem,
    "van-swipe":Swipe,
    "van-search":Search,
    GoodsStyle2,
  },
  created(){
    apiShop.getShopDetails(1).then(res=>{
      this.shop = res;
    });
    apiMenue.getHotMenues().then(res=>{
      this.hotmenues = res;
    })
  },
}
</script>
<style lang="scss">
.home-wrap{
  height: 100%;
  overflow: auto;
  padding-top:54px;
  background-color: $main-bc;
  .header-search{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
  }
  .banner-wrap{
    .swipe-pic{
      width: 100%;
      height: 190px;
    }
    margin-bottom: 15px;
  }
  .hot-wrap{
    .hot-tittle{
      padding-left: 15px;
      height: 54px;
      font-size: 18px;
      line-height: 54px;
      border-bottom: 1PX $main-bdcl solid;
      color: $main-cl;
    }
    .hot-menues-wrap{
      display: flex;
      flex-wrap: wrap;
      .hot-menue-wrap{
        margin:5px 5px 15px;
      }
    }
  }
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
