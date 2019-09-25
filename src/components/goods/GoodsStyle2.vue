<template>
    <a class="goods-wrap2">
      <a class="pic" :href="`#/MenueDetails/${item.id}`">
        <img :src="`http://k2stbb.natappfree.cc/order_menue/public/upload/${item.screen}`"/>
      </a>
      <div class="content">
        <h6>{{item.name}}</h6>
        <p class="price">价格：<span>￥{{item.original_price}}</span></p>
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
        let menues = this.$store.state.menues;
        let id = this.item.id;
        // 默认为0 当数据发生改变时给菜单强制添加  num键
        this.$set(this.item, 'num', val)
        // console.log(this.item)
        let res = this.isOrder(id,menues)
        if(res.isOrder){
          val == 0 ? this.$store.commit('delMenue',res.index): this.$store.commit('changeNum',{"menue":this.item,"index":res.index});
        }else{
          this.$store.commit('addMenue',this.item)
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
      let menues = this.$store.state.menues;
      let id = this.item.id;
      let res = this.isOrder(id,menues)
      if(res.isOrder){
        // 必须强制刷新数据
        // this.item.num = menues[i].num   不管用
        this.$set(this.item, 'num', menues[res.index].num)
      }
    },
}
</script>

<style lang="scss">
.goods-wrap2{
  display: block;
  width: 177px;
  .pic{
    display: block;
    img{
      width: 177px;
      height: 177px;
      margin-bottom: 9px;
    }
  }
  .content{
    padding-left: 11px;
    h6{
      height: 24px;
      font-size:16px;
      line-height: 24px;
      font-weight: 500;
    }
    .price{
      font-size: 13px;
      line-height: 20px;
      height: 20px;
      span{
        color: $main-cl;
      }
    }
  }
}
</style>