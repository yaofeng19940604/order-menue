<template>
  <div class="menue-details-wrap">
    <MyNav :title="menue.name"/>
    <div class="banner-wrap">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(img,index) in menue.banner_arr" :key="index"><img class="swipe-pic" :src="`http://hsjxww.natappfree.cc/order_menue/public/upload/${img}`"></van-swipe-item>
      </van-swipe>
    </div>
    <div class="text-wrap">
      <h6 class="name">{{menue.name}}</h6>
      <p class="price">￥{{menue.original_price}}</p>
      <van-stepper min="0" :value="menue.num || 0" @change="onChange"/>
      <h6>菜品介绍</h6>
      <p>{{menue.des||"暂无介绍，敬请更新"}}</p>
    </div>
  </div>
</template>
<script>
import apiMenue from "../api/menue.js"
import { Swipe, SwipeItem, Stepper } from 'vant';
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
    "van-stepper":Stepper,
    MyNav,
  },
  props: {},
  methods: {
    onChange(val){
        let menues = this.$store.state.menues;
        let id = this.menue.id;
        // 默认为0 当数据发生改变时给菜单强制添加  num键
        this.$set(this.menue, 'num', val)
        // console.log(this.item)
        let res = this.isOrder(id,menues)
        if(res.isOrder){
          val == 0 ? this.$store.commit('delMenue',res.index): this.$store.commit('changeNum',{"menue":this.menue,"index":res.index});
        }else{
          this.$store.commit('addMenue',this.menue)
        }
        this.$store.commit("sumPrice")
        this.$store.commit("sumNum")
      },
      isOrder(id,menues){
        if(menues.length==0){
            return {isOrder:false}
        }
        for(var i = 0; i < menues.length; i++){
          if(menues[i].id == id){
            return {isOrder:true,index:i}
          }
        }
        return {isOrder:false}
      }
  },
  created(){
    let id = this.$route.params.id
    let menues = this.$store.state.menues;
    let res = this.isOrder(id,menues)
    apiMenue.getMenueDetails(id).then(menue=>{
      this.menue = menue
      // 异步请求问题，强制更新不能放在axios后面 ，必须放在代码里面
      if(res.isOrder){
        this.$set(this.menue, 'num', menues[res.index].num)
      }
    })
  },
  mounted() {
    
  },
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