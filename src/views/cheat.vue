<template>
  <div>
    <constol/>
    <h5>
      连接状态:
      <span></span>
      {{status}}
    </h5>
    <el-container>
      <el-main>
        <cheatContent :res="news"></cheatContent>
        <cheatInput @js="send"/>
      </el-main>
      <el-aside width="200px">
        <h5>聊天室成员</h5>
        <member :person="users"/>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import cheatContent from "../components/cheatContent";
import cheatInput from "../components/cheatInput";
import constol from "../components/constol";
import member from "../components/member";
var iosocket = io.connect("http://localhost:1234");
export default {
  components: {
    cheatContent,
    cheatInput,
    constol,
    member
  },
  data() {
    return {
      news: "",
      status: "未知",
      users: ''
    };
  },

  methods: {
    web() {
      iosocket.on("connect", () => {
        this.status = "成功";
        // console.log("链接成功");
      });
      iosocket.on("message", message => {
        // console.log("服务器返回" + message);
        this.news = message;
      });
      iosocket.on("disconnect", () => {
        this.status = "断开";
      });
    },
    send(item) {
      let names = localStorage.getItem("name");
      let obj = { names, details: item };
      iosocket.send(obj);
    },
    open() {
      let name = localStorage.getItem("name");
      if (name) {
        return;
      } else {
        this.$prompt("请输入昵称", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        }).then(({ value }) => {
          localStorage.setItem("name", value);
        });
      }
    },
    joinuser() {
      let user = localStorage.getItem("name");
      iosocket.emit("join", user);
      iosocket.on("join", (val,val1) => {
        this.users=val1
        this.$notify({
          title: "通知",
          message: `${val}   加入群聊`,
          position: "top-left"
        });
      });
    }
  },
  async mounted() {
    await this.open();
    await this.joinuser();
    await this.web();
  }
};
</script>

<style scoped>

.el-main {
  border: 1px solid #cdc5bf;
  height: 580px;
}
.el-aside {
  border: 1px solid #cdc5bf;
  border-left: none;
}
</style>