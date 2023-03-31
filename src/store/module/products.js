import { axiosApi } from "@/config/axios"

export const state = {
   product : {},
}
export const getters = {
   get_product : (state)=>state.product,

}
export const mutations = {
   set_product :(state,data) => state.product = data,

}
export const actions = {
   async fetchProduct({commit}){
       try{
           var response = await axiosApi.get("products")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_product',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
