<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    // console.log("created")
    if(JSON.parse(sessionStorage.getItem("menues"))){
      this.$store.commit("intMenues")
    }
    if(JSON.parse(sessionStorage.getItem("user"))){
      this.$store.commit("intUser")
    }
  },
  mounted() {
    // console.log("mounted")
  },
  beforeDestroy(){
    // console.log("beforeDestroy")
  }
}
</script>

<style lang="scss">

</style>
