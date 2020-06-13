import Vue from "vue"
import VueRouter from "vue-router"
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history',
    scrollBehavior(to,from,savadPosition){
        return {x : 0 ,y : 0}
    }
})