<template>
    <a class="goods-wrap clearfix">
      <div class="pic fl">
        <img :src="`../images/${item.screen}`"/>
      </div>
      <div class="content fl">
        <h6>{{item.name}}</h6>
        <p class="sales">{{item.sales}}</p>
        <p class="price">￥{{item.original_price}}</p>
        <van-stepper min="0" v-model="value" @change="onChange(item.id)"/>
      </div>
    </a>
</template>

<script>
import { Stepper } from 'vant';
export default {
    data:function(){
        return{
          value: 0,
        }
    },
    props:["item"],
    components:{
      "van-stepper":Stepper,
    },
    methods:{
      onChange(id){
        let menue = {}
        menue.id = id;
        menue.num = this.value;
        let isOrder = this.isOrder(id)
        console.log(isOrder)
        menue.index = isOrder.index;
        if(isOrder.res){
          this.$store.commit('addNum',menue)
        }else{
          this.$store.commit('addMenue',menue)
        }
      },
      isOrder(id){
        let menues = this.$store.state.menues;
        for(let i = 0; i < menues.length; i++){
          if(menues[i].id == menue.id){
            return {res:true,index:i}
          }
        }
        return {res:false,index:menues.length}
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