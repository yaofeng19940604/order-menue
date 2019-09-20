<template>
  <div class="user-wrap">
    <van-panel v-show="show" title="订单详情" :desc="`下单时间：${orderTime}`" :status="status">
      <div>内容</div>
    </van-panel>
  </div>
</template>

<script>
import { Panel, Toast } from 'vant';
export default {
  data(){
    return {
      orderCode:"",
      orderTime:"",
      status:"制作中",
      show:true,
    }
  },
  components: {
    "van-panel":Panel,
  },
  created(){
    let orderCode = this.$store.state.orderCode;
    if(!orderCode){
      this.show = false;
      Toast("您还未下单，请下单");
      // this.$router.push("HomePage")
      return;
    }
    this.orderCode = orderCode;
    this.$axios.post("/order/getOrder",{order_id:orderCode})
    .then(res => {
      this.orderTime = res.data.created_at;
    })
  },
  mounted(){

  }
}
</script>
<style lang="scss">

</style>
