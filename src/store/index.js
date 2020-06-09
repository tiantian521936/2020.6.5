import Vuex from 'vuex'
import vue from 'vue'
import Home from './modules/home'
import User from './modules/user'

vue.use(Vuex)

const mutations = {}
const actions = {}
const getters = {}


export default new Vuex.Store({
    mutations,
    actions,
    getters,
    
    modules: {
      Home,
      User
    }
})