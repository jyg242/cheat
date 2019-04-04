<template>
  <div class="content">
    <el-button type="primary" plain @click="change">修改昵称</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    change() {
      this.$prompt("请输入新的昵称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(({ value }) => {
          var name=localStorage.getItem('name')
          if(name){
              localStorage.setItem('name',value)
              this.$alert('修改成功','提醒')
          }else{
              this.$alert('昵称不存成,请重新刷新页面','提醒')
              this.history.go(0)
          }
      });
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  border: 1px solid rebeccapurple;
  display: flex;
}
</style>