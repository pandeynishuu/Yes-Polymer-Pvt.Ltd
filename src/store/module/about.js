import { axiosApi } from "@/config/axios"

export const state = {
   about : {},
}
export const getters = {
   get_about : (state)=>state.about,

}
export const mutations = {
   set_about :(state,data) => state.about = data,

}
export const actions = {
   async fetchAbout({commit}){
       try{
           var response = await axiosApi.get("about")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_about',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
