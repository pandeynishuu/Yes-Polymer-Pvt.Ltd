<template>
<section id="footer">
    <div class="footer-top">
        <div class="container">
          <div class="row">
  
            <div class="col-lg-4 col-md-6 footer-contact">
              <h3>{{company.name}}<span></span></h3>
              <p>
                Special Economic Zone (SEZ)  <br>
                Rohini -1 Rupandehi<br>
                Nepal<br><br>
                <strong>Email:</strong>{{ company.email }}<br>
                <strong>phone:</strong>{{ company.contact}}<br>
                
              </p>
            </div>
  
            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="fa-solid fa-chevron-right"></i><a href="#" style="text-decoration:none;">Home</a></li>
                <li><i class="fa-solid fa-chevron-right"></i><a href="#about"  style="text-decoration:none;">About Us</a></li>
                <li><i class="fa-solid fa-chevron-right"></i><a href="#product"  style="text-decoration:none;">Products</a></li>
                <li><i class="fa-solid fa-chevron-right"></i><a href="#gallery"  style="text-decoration:none;">Gallery</a></li>
                <li><i class="fa-solid fa-chevron-right"></i><a href="#contact"  style="text-decoration:none;">Contact Us</a></li>
              </ul>
            </div>
  
            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <div class="social-links mt-3">
                <a :href="company.facebook" class="facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>

                <a href="#" class="youtube"><i class="fa-brands fa-youtube"></i></a>
              </div>
            </div>
  
          </div>
        </div>
        <div class="container py-4">
            <div class="copyright">
              &copy; Copyright <strong><span>{{company.name}}</span></strong>. All Rights Reserved
            </div>
            
        </div>
          
      </div>
</section>
      
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters({
            company:"get_company"
        })
    }
}
</script>

<style  scoped>
#footer {
    background: #fff;
    padding: 0 0 30px 0;
    color: #444444;
    font-size: 14px;
    background: #f1f6fe;
  }
  
  #footer .footer-newsletter {
    padding: 50px 0;
    background: #f1f6fe;
    text-align: center;
    font-size: 15px;
  }
  
  #footer .footer-newsletter h4 {
    font-size: 24px;
    margin: 0 0 20px 0;
    padding: 0;
    line-height: 1;
    font-weight: 600;
  }
  
  #footer .footer-newsletter form {
    margin-top: 30px;
    background: #fff;
    padding: 6px 10px;
    position: relative;
    border-radius: 4px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
    text-align: left;
  }
  
  #footer .footer-newsletter form input[type="email"] {
    border: 0;
    padding: 4px 8px;
    width: calc(100% - 100px);
  }
  
  #footer .footer-newsletter form input[type="submit"] {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border: 0;
    background: none;
    font-size: 16px;
    padding: 0 20px;
    background: var(--kPrimary);
    color: #fff;
    transition: 0.3s;
    border-radius: 0 4px 4px 0;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }
  
  #footer .footer-newsletter form input[type="submit"]:hover {
    background: #0d58ba;
  }
  
  #footer .footer-top {
    padding: 60px 0 30px 0;
    background: #fff;
  }
  
  #footer .footer-top .footer-contact {
    margin-bottom: 30px;
  }
  
  #footer .footer-top .footer-contact h3 {
    font-size: 24px;
    margin: 0 0 15px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 700;
  }
  
  #footer .footer-top .footer-contact h3 span {
    color: var(--kPrimary);
  }
  
  #footer .footer-top .footer-contact p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Roboto", sans-serif;
    color: #777777;
  }
  
  #footer .footer-top h4 {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    position: relative;
    padding-bottom: 12px;
  }
  
  #footer .footer-top .footer-links {
    margin-bottom: 30px;
  }
  
  #footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  #footer .footer-top .footer-links ul i {
    padding-right: 2px;
    color: var(--kPrimary);
    font-size: 18px;
    line-height: 1;
  }
  
  #footer .footer-top .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }
  
  #footer .footer-top .footer-links ul li:first-child {
    padding-top: 0;
  }
  
  #footer .footer-top .footer-links ul a {
    color: #777777;
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
  }
  
  #footer .footer-top .footer-links ul a:hover {
    text-decoration: none;
    color: var(--kPrimary);
  }
  
  #footer .footer-top .social-links a {
    font-size: 18px;
    display: inline-block;
    background:var(--kPrimary);
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 4px;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }
  
  #footer .footer-top .social-links a:hover {
    background: #3b8af2;
    color: #fff;
    text-decoration: none;
  }
  
  #footer .copyright {
    text-align: center;
    float: left;
  }
  
  #footer .credits {
    float: right;
    text-align: center;
    font-size: 13px;
    color: #444444;
  }
  
  @media (max-width: 768px) {
    #footer .copyright, #footer .credits {
      float: none;
      text-align: center;
      padding: 2px 0;
    }
  }
</style>