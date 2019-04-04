<template>
  <div>
    <ul>
      <li>{{news}}</li>
    </ul>
    <input type="text" v-model="input">
    服务器返回:{{news}},输入内容{{input}}
    <button @click="send">发送</button>
  </div>
</template>

<script>
var iosocket = io.connect("http://localhost:1234");
export default {
  data() {
    return {
      news: "12",
      input: ""
    };
  },
  methods: {
    web() { 
      iosocket.on("connect", ()=> {
        this.news='终于链接成功'
        console.log("链接成功")
        })
      iosocket.on("message", message => {
          console.log("服务器返回" + message);
          this.news=message
        });
      
      iosocket.on("disconnect", ()=> {
        this.news='断开链接'
      })
    },
    send() {
      iosocket.send(this.input);
    }
  },
  mounted() {
    this.web();
  }
};
</script>

<style scoped>
</style>