<template>
    <div>
        <!-- 页面头部 -->
        <Header></Header>
        <!-- 显示所有路由组件 -->
        <router-view></router-view>
        <!-- 底部 -->
        <!-- 当到登录或者注册界面的时候不显示底部组件 -->
        <Footer v-if="!$route.meta.isHide"></Footer>
    </div>
</template>





<script type="text/ecmascript-6">
import Header from './compontents/Header'
import Footer from './compontents/Footer'
import {reqCategorys} from './api'




    export default {
        name: 'App',

    async mounted() {
        await reqCategorys()
    },


        components:{
            Header,
            Footer
        }

    }
</script>



<style  lang = "less" scoped>
    
</style>