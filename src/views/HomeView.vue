<template>
  <template-view>
    <section id="hero1" class="d-flex align-items-center">
      <div class="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>Welcome to <span style="color:#0E743C;">Yes Polymers Pvt.Ltd</span>
            </h1><br>
            <h2> Manufacturers of recycled plastic products</h2><br><br><br><br>
          <button class="btn"><a :href="company.facebook" style="color: white; text-decoration:none;" target="_blank">Join Us On Facebook</a></button>
            
          </div>
        </section>

          <!-- About Us -->

        <section>
          <about-view id="about"></about-view>
        </section>

        <section class="py-5">
          <products-view id="product"></products-view>
        </section>

        <section class="py-5">
          <gallery-view id="gallery"></gallery-view>
        </section>


        <section class="py-5">
          <contact-view id="contact"></contact-view>
        </section>
  </template-view>

</template>

<script>
import TemplateView from './TemplateView.vue';
import AboutView from '@/views/AboutView'
import ProductsView from '@/views/ProductsView'
import GalleryView from '@/views/GalleryView' 
import ContactView from '@/views/ContactView'
import { mapGetters } from "vuex";
  export default {
components:{
  TemplateView,
  AboutView,
  ProductsView,
  GalleryView,
  ContactView
},
computed:{
  ...mapGetters({
    company:"get_company"
  })
}
  }
</script>

<style >
#hero {
  width: 100%;
  height: 75vh;
  background: url("../assets/hero-bg.jpg") top left;
  background-size: cover;
  position: relative;
 

}
#hero1 {
  width: 100%;
  height: 75vh;
  background: url("../assets/hero-bg.jpg") top left;
  background-size: cover;
  position: relative;
  text-align: center;
  
}

@media (max-width: 992px) {
  #hero .container {
    padding-top: 58px;
  }
}
#hero .container1 {
  position: relative;
  padding-top: 132px;
}
.hero-txt{
  color: var(--kParagraph)
}
@media (max-width: 992px) {
  #hero .container1 {
    padding-top: 58px;
  }
}
#hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #222222;
  font-family: "Poppins", sans-serif;
}


#hero h2 {
  color: #555555;
  margin: 5px 0 30px 0;
  font-size: 24px;
  font-weight: 400;
}

#hero1:before {
  content: "";
  background: rgba(255, 255, 255, 0.81);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero1 .container {
  position: relative;
  padding-top: 132px;
}

@media (max-width: 992px) {
  #hero1 .container {
    padding-top: 58px;
  }
}

#hero1 h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #222222;
  font-family: "Poppins", sans-serif;
}

#hero1 h1 span {
  color: #bc8e2e;
}

#hero1 h2 {
  color: #555555;
  margin: 5px 0 30px 0;
  font-size: 24px;
  font-weight: 400;
}

.btn {
  background-color: var(--kPrimary);
  color: white;
}

</style>
