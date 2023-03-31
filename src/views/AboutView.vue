<template>
    <div>
        <section class="about py-5" >
            <div class="container" data-aos="fade-up">
      
              <div class="section-title">
                <h1 style="text-align: center;">{{about.title}}</h1>
      
              </div>
      
              <div class="row">
                <div class="col-lg-5" data-aos="zoom-out" data-aos-delay="100">
                  <img :src="about.image" class="img-fluid w-100">
                </div>
                <div class="col-lg-7 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                  <h3 class="font-italic"></h3>
                 <div v-html="about.description"></div>
                  
                </div>
              </div>
              
            </div>
          </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters({
            about:"get_about"
        })
    }
}
</script>

<style lang="scss" scoped>

</style>