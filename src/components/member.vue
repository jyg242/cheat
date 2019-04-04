<template>
    <div class="content">
        <ul>
            <li v-for="(item,index) in person" :key="index" class="left">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['person']
    }
</script>

<style scoped>
li{
    list-style: none;
    /* float: left; */
}
.left{
    /* float: left; */
}
ul,li{
    margin: 0;
    padding: 0;
}
</style>