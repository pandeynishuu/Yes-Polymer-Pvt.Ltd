<template>
    <div>
        <section class="products">
            <div class="container" data-aos="fade-up">
      
              <div class="section-title">
                <h1 style="text-align: center;">Our Products</h1>
                
              </div>
              <div class="row">
                <div class="col-md-4" v-for="(product, index) in product" :key="index">
                  <vs-card type="5">
                    <template #img>
                      <img :src="product.image" alt="">
                    </template>
                    <template #text>
                      <p>
                     {{ product.name }}
                      </p>
                    </template>
                    <template #interactions>
                      <vs-button danger icon>
                        <i class='bx bx-heart'></i>
                      </vs-button>
                    </template>
                  </vs-card>
                
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
            product:"get_product"
        })
    }
}
</script>

<style  scoped>

  
</style>