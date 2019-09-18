<template>
  <div class="my-nav-wrap">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  data(){
    return {
      
    }
  },
  props:{
    title:{
      type:String,
      default:"标题"
    },
    path:{
      type:String,
      default:"-1"
    }
  },
  methods: {
    onClickLeft(){
      if(this.path == -1){
        this.$router.go(-1)
      }else{
        this.$router.push(this.path)
      }
    }
  },
  components: {
    "van-nav-bar":NavBar,
  }
}
</script>
<style lang="scss">
.my-nav-wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .van-nav-bar .van-icon{
    color: #000;
  }
  .van-nav-bar{
    background-color: $main-cl;
  }
  .van-nav-bar__title{
    color: #000;
  }
}
</style>
