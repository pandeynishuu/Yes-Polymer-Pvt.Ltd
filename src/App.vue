<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
  export default {
    methods:{
      ...mapActions(['fetchCompany','fetchAbout', 'fetchProduct','fetchGallery'])
    },
    created(){
      this.fetchCompany();
      this.fetchAbout();
      this.fetchProduct();
      this.fetchGallery();
    }
  }
</script>

<style>
:root {
  --kPrimary:#33316E ;
  --kSecondary :#ffccff;
  --kHeading : #000000;
  --kParagraph : #0E743C;
  --lightPrimary : #e0e8f7;

}
h1{
  color: var(--kParagraph)
}
</style>
