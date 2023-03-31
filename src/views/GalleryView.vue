<template>
    <div>
        <div>
            <section class="Gallery">
                <div class="container" data-aos="fade-up">
          
                  <div class="section-title">
                    <h1 style="text-align: center;">Photo Gallery</h1>
                    
                  </div>
                  <div class="row">
                    <div class="col-md-4" v-for="(gallery, index) in gallery" :key="index">
                        <img :src="gallery.featuredImage" alt="" class="img-fluid m-2">
                    </div>
                   
                  </div>
          
                </div>
              </section> 
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters({
            gallery:"get_gallery"
        })
    }
}
</script>

<style lang="scss" scoped>

</style>