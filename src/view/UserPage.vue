<template>
  <div class="user-wrap">
    <van-panel v-show="show" title="订单详情" :desc="`下单时间：${orderTime}`" :status="status">
      <div class="oreder-menue-wrap">
        <GoodsOrder v-for="menue in orderMenue" :key="menue.id" :menue="menue"/>
      </div>
      <div class="bottom">
        <p>合计：<span>￥{{orderPrice}}</span></p>
      </div>
    </van-panel>
  </div>
</template>

<script>
import GoodsOrder from "../components/goods/GoodsOrder.vue"
import { Panel, Toast } from 'vant';
export default {
  data(){
    return {
      orderCode:"",
      orderTime:"",
      status:"制作中",
      show:true,
      orderMenue:[],
      orderPrice:0
    }
  },
  components: {
    "van-panel":Panel,
    GoodsOrder,
  },
  created(){
    let orderCode = sessionStorage.getItem("orderCode");
    if(!orderCode){
      this.show = false;
      Toast("您还未下单，请下单");
      this.$router.push("ClassifyPage")
      this.$store.commit('changeIndex',1)
      return;
    }
    this.orderCode = orderCode;
    this.$axios.post("/order/getOrder",{order_id:orderCode})
    .then(res => {
      this.orderTime = res.data.created_at;
    })
    this.orderMenue = JSON.parse(sessionStorage.getItem("orderMenues"))
    this.orderPrice = sessionStorage.getItem("orderPrice");
  },
  mounted(){

  }
}
</script>
<style lang="scss">
.user-wrap{
  height: 100%;
  overflow: auto;
  .oreder-menue-wrap{
    padding:10px 16px;
  }
  .bottom{
    padding-right: 20px;
    text-align: right;
    line-height: 40px;
    font-size: 20px;
    span{
      font-size: 24px;
      color: $main-cl;
    }
  }
}
</style>
