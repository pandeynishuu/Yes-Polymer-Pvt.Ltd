import { axiosApi } from "@/config/axios"

export const state = {
   company : {},
}
export const getters = {
   get_company : (state)=>state.company,

}
export const mutations = {
   set_company :(state,data) => state.company = data,

}
export const actions = {
   async fetchCompany({commit}){
       try{
           var response = await axiosApi.get("company")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_company',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
