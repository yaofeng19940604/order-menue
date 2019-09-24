<template>
    <div class="oreder-goods-wrap">
      <div class="pic-wrap">
        <img :src="`http://hsjxww.natappfree.cc/order_menue/public/upload/${menue.screen}`"/>
      </div>
      <div class="text-wrap clearfix">
        <div class="text-fl fl">
          <h6>{{menue.name}}</h6>
          <p>数量：{{menue.num}}<span>单价：{{menue.original_price}}</span></p>
        </div>
        <div class="text-fr fr">
          <p>￥{{price}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
          
        }
    },
    props:["menue"],
    components:{

    },
    methods:{
      
    },
    computed:{
      price(){
        return this.menue.num*this.menue.original_price
      }
    },
    created(){
      
    },
}
</script>

<style lang="scss" scoped>
.oreder-goods-wrap{
  display: flex;
  width: 100%;
  padding: 15px 0;
  .pic-wrap{
    flex: 0 0 auto;
    width: 50px;
    img{
      width: 50px;
      height: 50px;
    }
  }
  .text-wrap{
    flex-grow: 1;
    padding-left: 15px;
    .text-fl{
      h6{
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 10px;
      }
      p{
        font-size: 13px;
        line-height: 16px;
        color: #999;
      }
      span{
        margin-left: 20px;
      }
    }
    .text-fr{
      p{
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>