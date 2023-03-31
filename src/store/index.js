import Vue from 'vue'
import Vuex from 'vuex'
import * as company from './module/company'
import * as about from './module/about'
import * as product from './module/products'
import * as gallery from './module/gallery'
import * as contact from './module/contact'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    company,
    about,
    product,
    gallery,
    contact
  }
})
