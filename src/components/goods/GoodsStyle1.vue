<template>
    <a class="goods-wrap clearfix">
      <div class="pic fl">
        <img :src="`../images/${item.screen}`"/>
        <!-- <img :src="`http://xwgkey.natappfree.cc/order_menue/public/upload/${item.screen}`"/> -->
      </div>
      <div class="content fl">
        <h6>{{item.name}}</h6>
        <p class="sales">{{item.sales}}</p>
        <p class="price">￥{{item.original_price}}</p>
        <van-stepper min="0" :value="item.num || 0" @change="onChange"/>
      </div>
    </a>
</template>

<script>
import { Stepper } from 'vant';
export default {
    data:function(){
        return{
          
        }
    },
    props:["item"],
    components:{
      "van-stepper":Stepper,
    },
    methods:{
      onChange(val){
        let id = this.item.id;
        this.$set(this.item, 'num', val)
        if(this.isOrder(id)){
          this.item.num == 0 ? this.$store.commit('delMenue',this.item): this.$store.commit('changeNum',this.item);
        }else{
          this.$store.commit('addMenue',this.item)
        }
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
    mounted(){
      var menues = this.$store.state.menues;
      for(var i = 0; i < menues.length; i++){
        if(menues[i].id == this.item.id){
          // 必须强制刷新数据
          // this.item.num = menues[i].num   不管用
          this.$set(this.item, 'num', menues[i].num)
        }
      }
    }
}
</script>

<style lang="scss">
.goods-wrap{
  display: block;
  width: 100%;
  padding: 20px 0;
  .pic{
    img{
      width: 95px;
      height: 95px;
      margin: 0 9px;
    }
  }
  h6{
    height: 24px;
    font-size:16px;
    line-height: 24px;
    font-weight: 500;
  }
  .sales{
    font-size: 13PX;
    line-height: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
  .price{
    font-size: 16px;
    line-height: 20px;
    height: 20px;
    color: $main-cl;
  }
}
</style>