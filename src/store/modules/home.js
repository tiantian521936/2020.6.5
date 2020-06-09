import {reqCategorys} from '../../api'
export default {
    state : {
        categoryList:[]
    },

    mutations :{
        receive_category_list(state,categoryList){          
            state.categoryList = categoryList
        }
    },

    actions:{
        //发起请求
       async getcategoryList({commit}){
            //调用api获取三级分类的数据
            const result = await reqCategorys()
            
            if(result.code === 200){
                const categoryList = result.data.filter((item,index )=>index<15)
                
                commit('receive_category_list',categoryList)
            }
        }
    },

    getters:{

    }
}