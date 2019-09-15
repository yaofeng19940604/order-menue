<template>
  <div class="login-wrap">
    <div class="head">
      <h5>晋福刀削面欢迎您</h5>
    </div>
    <van-picker
      show-toolbar
      title="请选择桌号"
      :default-index="2"
      :columns="columns"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
import { Picker, Toast } from 'vant';
export default {
  data(){
    return {
      columns: ['一号桌', '二号桌', '三号桌', '四号桌', '五号桌', '六号桌', '七号桌', '八号桌', '九号桌'],
    }
  },
  methods: {
    onConfirm(value, index) {
      Toast(`您选择的是：${value}`);
      this.$axios.post("api/user/matchingNum",{
          id: index+1,
      }).then(res=>{
        this.user = res.data[0];
        this.$store.commit('saveUser',this.user)
      })
      this.$router.push("home");
    },
    onCancel() {
      Toast('已取消');
    }
  },
  components: {
    "van-picker":Picker,
  }
}
</script>
<style lang="scss">
.login-wrap{
  .head{
    h5{
      text-align: center;
      height: 100px;
      line-height: 100px;
      font-size: 30px;
    }
  }
}
</style>

