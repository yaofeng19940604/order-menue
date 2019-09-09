<template>
  <div class="home-wrap">
    home
    <form>
      <select name="table" v-model="id">
        <option value="1">一号桌</option>
        <option value="2">二号桌</option>
        <option value="3">三号桌</option>
        <option value="4">四号桌</option>
        <option value="5">五号桌</option>
      </select>
      <button type="button" @click="onSubmit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: 1,
    }
  },
  methods: {
    onSubmit(){
      this.$axios.post("api/user/matchingNum",{
          id: this.id
      }).then(res=>{
        this.user = res.data[0];
      })
    },
  },
  components: {
    
  }
}
</script>
<style lang="scss">
select{
  width: 300px;
  font-size: 30px;
}
button{
  width: 100px;
  font-size: 60px;
  line-height: 100px;
}
</style>
