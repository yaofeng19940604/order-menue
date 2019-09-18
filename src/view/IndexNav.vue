<template>
  <div id="index-wrap">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="nav-bot">
      <van-grid clickable :column-num="4">
        <van-grid-item
          class="item ac"
          icon="wap-home-o"
          text="首页"
          to="/home"
        />
        <van-grid-item
          class="item"
          icon="shop-o"
          text="分类"
          to="/home/ClassifyPage"
        />
        <van-grid-item
          class="item"
          icon="shopping-cart-o"
          text="订单"
          to="/home/CartPage"
        />
        <van-grid-item
          class="item"
          icon="manager-o"
          text="我的"
          to="/home/UserPage"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant';
import $ from 'jquery'
export default {
  components: {
    "van-grid":Grid,
    "van-grid-item":GridItem,
  },
  data:function(){
    return{

    }
  },
  methods:{

  },
  mounted() {
    $(".item").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
    })
  },
}
</script>

<style lang="scss">
#index-wrap{
  background-color: $main-bc;
  display: flex;
  flex-flow:column nowrap;
  height: 100vh;
  .content{
    flex: 1;
    overflow:hidden;
  }
  .nav-bot{
    border-top:1Px $main-bdcl solid;
    border-bottom:1Px $main-bdcl solid;
    flex: 0;
    height: 114px;
    .van-grid-item__content{
      background-color:transparent;
      padding-top: 6px;
      padding-bottom: 6px;
    }
    .van-grid-item__icon{
      font-size: 20px;
    }
    .van-grid-item__text{
      margin-top:4px;
      font-size: 14px;
    }
    .ac{
      .van-grid-item__icon{
        color: $main-cl;
      }
      .van-grid-item__text{
        color: $main-cl;
      }
    }
  }
}
</style>
