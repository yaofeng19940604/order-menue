<template>
  <div class="search-page-wrap">
    <div class="header-search">
      <van-icon class="icon" name="wap-home-o" @click="onClick"/>
      <van-search
        class="search"
        v-model="words"
        placeholder="请输入菜单名"
        background="#3298ed"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
    <div class="search-menues-wrap">
      <div class="search-menue-wrap" v-for="menue in menues" :key="menue.id">
          <GoodsStyle2 :item="menue"/>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsStyle2 from "../components/goods/GoodsStyle2.vue"
import { Search, Icon  } from 'vant';
export default {
  data(){
    return {
      menues:[],
      words:"",
    }
  },
  components: {
    "van-search":Search,
    "van-icon":Icon,
    GoodsStyle2,
  },
  methods:{
    onSearch(val){
      this.$axios.post("/menue/searchMenue",{words:val})
      .then(res => {
        this.menues = res.data;
      })
    },
    onCancel(){
      this.value = "";
      this.$router.go(-1)
    },
    onClick(){
      this.$router.push("/");
    }
  },
  created(){
    this.words = this.$route.params.words
    this.onSearch(this.words)
  }
}
</script>
<style lang="scss">
.search-page-wrap{
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
    .search{
      padding-left: 50px;
    }
    .van-search__action{
      color: #fff;
    }
    .icon{
      position: absolute;
      top:15px;
      left: 12px;
      font-size: 24px;
      color: #fff;
    }
  }
  .search-menues-wrap{
    display: flex;
    flex-wrap: wrap;
    .search-menue-wrap{
      margin:5px 5px 15px;
    }
  }
}
</style>
