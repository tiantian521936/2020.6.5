import instance from './ajax'
import mockAjax from './mockAjax'


export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
// export const reqProductList = (options) => ajax.post('/list',options)
 

        //请求登录接口
export function reqlogin (mobile,password){
    return instance({
        url : '/user/passport/login',
        method : 'POST',
        data :{
            mobile,
            password
        }
    })
}

//获取三级分类的接口
export function reqCategorys(){
    return instance({
        url : '/product/getBaseCategoryList',
        method : 'GET',    
    })
}

// export const reqBanners = () => mockAjax('/banners')
// export const reqFloors = () => mockAjax('/floors')


//search列表数据接口
export function reqProductList(options){
    return instance({
        url:'/list',
        method:'POST',
        data:options
    })
}

export const reqRecommend = () => mockAjax('/recommend')
