import {reqCategorys,reqBanners,reqFloors} from '../../api'
export default {
    state : {
        categoryList:[],
        banners:[],
        floors:[]
    },

    mutations :{

        receive_banners(state,banners){          
            state.banners = banners
        },

        receive_floors(state,floors){          
            state.floors = floors
        },


        receive_category_list(state,categoryList){          
            state.categoryList = categoryList
        }
    },

    actions:{

        async getBanners({commit}){
            const result = await reqBanners()
            if(result.code === 200){
                const banners = result.data
                commit('receive_banners',banners)
            }
        },



        async getFloors({commit}){
            const result = await reqFloors()   
            if(result.code === 200){
                const floors = result.data
                commit('receive_floors',floors)
            }
        },







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