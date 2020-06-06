import Home from '../pages/Home'
import Search from '../pages/Search'

import Login from '../pages/Login'
import Register from '../pages/Register'

export default[
    
    {
        path:'/',
        component:Home 
    },
    {
        path:'/search:a?',
        component:Search,
        name:'search'
        
    },
    {
        path:'/login',//登录路径
        component:Login,//要显示的组件比如login登录组件
        meta:{
            isHide:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHide:true
        }
    }

]