import Home from '../pages/Home'
import Search from '../pages/Search'

import Login from '../pages/Login'
import Register from '../pages/Register'

import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'

import Detail from '../pages/Detail'


export default[
    {
        path:'/detail/:id',
        component:Detail
	},
    
    {
        path:'/',
        component:Home 
    },
    {
        path:'/search/:keyword?',
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
    },

    {
        path:'/addcartsuccess',
        component:AddCartSuccess
    },
    {
        path:'/shopcart',
        component:ShopCart
    }


    

]