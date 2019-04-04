<template>
  <div>
    
    <div class="content" ref="setHigh" >
     <!-- {{res}} -->
      <ul v-for="(item,index) in result" :key="index" >
        <li>
          <span class="name" >{{item.names}}</span>
          <span class="time">{{item.times}}</span>
        </li>
        <li v-if="item.details">
          <p>{{item.details}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["res"],
  data() {
    return {
      result: []
    }
  },
  methods: {
    setHight() {
      var div = this.$refs.setHigh;
      div.scrollTop = div.scrollHeight
    },
    // setcolor(){
       
    //   var R = Math.floor(Math.random() * 255);
    //   var G = Math.floor(Math.random() * 255);
    //   var B = Math.floor(Math.random() * 255);
    //   var res= 'rgb(' + R + ',' + G + ',' + B + ')' 
      
    
    // }
  },
  watch: {
    res(){
      this.result.push(this.res)
      this.setHight()
    }
  },
  mounted() {
    this.setHight()
    // this.setcolor()
    console.log(this.res)
    
    
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  padding-top: 15px;
}
li {
  display: flex;
}
.time {
  padding-left: 20px;
  color: #6495ED;
}
p {
  background-color: bisque;
  margin-left: 20px;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 8px;
}
.content {
  height: 450px;
  overflow: auto;
}
</style>