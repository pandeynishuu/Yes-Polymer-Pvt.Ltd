import { axiosApi } from "@/config/axios"

export const state = {
   contacts : {},
}
export const getters = {
   get_contacts : (state)=>state.contacts,

}
export const mutations = {
   set_contacts :(state,data) => state.contacts = data,


}
export const actions = {
   async postContact({commit},data){
       try{
            console.warn(data);
           var response = await axiosApi.post("contact",data)
           console.warn(response.data)
       if(response.status==200){
           commit('set_contacts',response.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}