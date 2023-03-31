import { axiosApi } from "@/config/axios"

export const state = {
   gallery : {},
}
export const getters = {
   get_gallery : (state)=>state.gallery,

}
export const mutations = {
   set_gallery :(state,data) => state.gallery = data,

}
export const actions = {
   async fetchGallery({commit}){
       try{
           var response = await axiosApi.get("galleries")
           console.warn(response.data.data)
       if(response.status==200){
          
           commit('set_gallery',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
