import instance from './ajax'
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
    instance({
        url : '/product/getBaseCategoryList',
        method : 'POST',
        
        
    })
}
