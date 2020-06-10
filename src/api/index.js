import instance from './ajax'
import mockAjax from './mockAjax'


export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')


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
