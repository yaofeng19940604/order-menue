<template>
    <categories></categories>
</template>

<script>
import ApiMenue from "../api/menue.js"
import ApiShop from "../api/shop.js"
import categories from "../components/goods/categories.vue"
export default {
  data(){
    return {

    }
  },
  components: {
    categories,
  },
  created(){
    // ApiMenue.getCategories().then(res=>{
    //   console.log(res)
    // });
    // ApiMenue.getMenues(1).then(res=>{
    //   console.log(res)
    // });
    // ApiMenue.getAllMenues().then(res=>{
    //   console.log(res)
    // });
    // ApiMenue.getMenueDetails(1).then(res=>{
    //   console.log(res)
    // });
    // ApiShop.getShopDetails(1).then(res=>{
    //   console.log(res)
    // });
  }
}
</script>
