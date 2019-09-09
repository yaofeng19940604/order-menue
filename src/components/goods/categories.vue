<template>
  <div class="category-wrap">
    <div class="sidebar">
      <van-sidebar v-model="activeKey" @change="onchang">
          <van-sidebar-item :title="item.category" v-for="item in categoryList" :key="item.id"/>
      </van-sidebar>
    </div>
    <div class="right-category">
      <a class="item" v-for="item in secondCategoryList" :key="item.id">
        <img :src="`../images/${item.screen}`"/>
        <p>{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
import ApiMenue from "../../api/menue.js"
import { Sidebar, SidebarItem } from 'vant';
export default {
    data:function(){
        return{
            activeKey: 0,
            categoryList:[],
            secondCategoryList:[],
        }
    },
    components: {
      "van-sidebar":Sidebar,
      "van-sidebar-item":SidebarItem,
    },
    props: {

    },
    methods:{
      onchang(index){
        let id = this.categoryList[index].id;
        ApiMenue.getMenues(id).then(res=>{
          this.secondCategoryList = res
        });
      },
    },
    watch:{

    },
    created(){
        ApiMenue.getCategories().then(res=>{
          console.log(res)
          this.categoryList = res
        });
        ApiMenue.getMenues(1).then(res=>{
          console.log(res)
          this.secondCategoryList = res
        });
    }
}
</script>

<style lang="scss">
.category-wrap{
  display: flex;
  height: 100%;
  background-color:#fff;
  .sidebar{
    width: 85px;
    overflow: auto;
    flex-shrink: 0;
  }
  .right-category{
    flex-grow: 1;
    overflow: auto;
    .item{
      display: inline-block;
      width: 95px;
      text-align: center;
      vertical-align: middle;
      img{
        width: 95px;
      }
      p{
        height: 40px;
        font-size:14px;
        line-height: 20px;
      }
    }
  }
}
</style>