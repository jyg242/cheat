<template>
    <div class="content">
        <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="fs"></el-input><el-button @click="fs">发送</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input:''
            }
        },
        methods: {
            async fs() {
                
               await this.$emit('js',this.input) 
               this.input=''
            }
        },
    }
</script>

<style scoped>
.content{
    margin-top:10px;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    margin-top: 25px;
    
}
.el-input{
    /* margin-top: 25px; */
    width: 70%;
}
.el-button{
    margin-left: 5%;
    /* height: 40px; */
}
</style>