<template>
  <div class="category-wrap">
    <div class="sidebar">
      <van-sidebar v-model="activeKey" @change="onchang">
          <van-sidebar-item :title="item.category" v-for="item in categoryList" :key="item.id"/>
      </van-sidebar>
    </div>
    <div class="right-category">
      <div v-for="goods in goodsList" :key="goods.id">
        <GoodsStyle1 :item="goods"/>
      </div>
    </div>
  </div>
</template>

<script>
import apiMenue from "../../api/menue.js"
import { Sidebar, SidebarItem } from 'vant';
import GoodsStyle1 from "./GoodsStyle1.vue"
export default {
    data:function(){
        return{
            activeKey: 0,
            categoryList:[],
            goodsList:[],
        }
    },
    components: {
      "van-sidebar":Sidebar,
      "van-sidebar-item":SidebarItem,
      GoodsStyle1,
    },
    props: {

    },
    methods:{
      onchang(){
        let id = this.activeKey+1;
        apiMenue.getMenues(id).then(res=>{
          this.goodsList = res
        });
      },
    },
    watch:{

    },
    created(){
        apiMenue.getCategories().then(res=>{
          this.categoryList = res
        });
        this.onchang();
    }
}
</script>

<style lang="scss">
.category-wrap{
  display: flex;
  height: 100%;
  background-color:$main-bc;
  .sidebar{
    width: 85px;
    overflow: auto;
    flex-shrink: 0;
  }
  .right-category{
    flex-grow: 1;
    overflow: auto;
  }
}
</style>