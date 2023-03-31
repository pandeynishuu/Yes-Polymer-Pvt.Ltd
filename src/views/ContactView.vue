<template>
    <div>
        <div class="container">
            <h1 style="text-align: center;">Contact Us</h1>
            <div class="row">
                <div class="col-md-6">
                    <h4>Location</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14242.648482944307!2d87.2862987!3d26.8188851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b8526c7c4c7bc1c!2sCode%20IT!5e0!3m2!1sen!2snp!4v1641223938902!5m2!1sen!2snp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                
                <div class="col-md-6">
                    <div id="contact">
                        <div class="container">
                            <div class="row">
                                <h4>Send Message</h4>
                                <div>
                                    <div class="form-group">
                                        <label class="control-label" for="name">Full Name <span>*</span></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required v-model="contactData.name" />
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">Please enter your name.</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="email">Email <span>*</span></label>
                                        <div class="input-group">
                                            <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required v-model="contactData.email"/>
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">Please enter a valid e-mail address.</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="name">subject<span>*</span></label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="subject" required v-model="contactData.subject"/>
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">subject</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="message">Message <span>*</span></label>
                                        <div class="input-group">
                                            <textarea rows="5" cols="30" class="form-control" id="message" name="message" placeholder="Enter your message" required v-model="contactData.message"></textarea>
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-unchecked form-control-feedback"></i></span>
                                        </div>
                                        <span class="help-block" style="display: none;">Please enter a message.</span>
                                    </div>
                                    <button type="button" class="btn" @click.prevent="postContact(contactData).then(()=>successMessage())">Save</button>
                                </div>
                            </div>
                        
                            <!-- end row contact -->
                        </div>
                        <!-- end container footer section -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions} from "vuex";
export default {
    data(){
            return {
                contactData :{
                    name : "",
                    email: "",
                    subject : "",
                    message : ""  
                }
            }
        },
    
        methods:{
            ...mapActions(['postContact']),

            successMessage(){
                this.$notify({
                    title: 'Message send',
                    message: 'Your Message has been sent',
                    position: 'bottom-right'
                  });
            }
        },
    computed:{
        ...mapGetters({
            company:"get_company"
        })
    }
}
</script>

<style  scoped>
body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: #fff;
    margin: 0;
    padding: 0;
}

h4 {
    color: var(--kPrimary);
    font-size: 35px;
    font-family: 'Montserrat', sans-serif;

}

h4:after {
    content: '';
    width: 50px;
    height: 3px;
    background: var(--kPrimary);
    display: block;
    margin: 15px auto;
    transition: all .2s ease-in-out;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

h4:hover:after {
    width: 100px;
}

h3,
h4,
h5 {
    font-family: 'Montserrat', sans-serif;
}

/*/ start contact /*/

footer {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
}

#contact h4 {
    margin-top: 22px;
    padding-bottom: 10px;
    text-align: center;
}

footer p {
    margin-top: 50px;
}

.social,
footer a {
    font-size: 30px;
    color: #24242a;
    margin: 10px;
}

footer a:hover,
footer a:after,
footer a:visited footer a:focus {
    color: var(--kPrimary);
}

.copyright {
    margin-top: 35px;
    font-size: 14px;
}

/*/ end contact /*/

/*/ form /*/

.form-group {
    margin-bottom: 8px;
}

.form-control:focus {
    border-color: var(--kPrimary);
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

#feedbackForm {
    font-size: 14px;
    text-align: left;
    color: var(--kPrimary);
}

#feedbackForm span {
    color: #fff;
}

.input-group-addon {
    padding: 6px 17px;
    background-color: var(--kPrimary);
    border: var(--kPrimary);
}

#feedbackSubmit {
    background-color: var(--kPrimary);
    font-size: 16px;
    margin: 0 auto;
    border-color: var(--kPrimary);
    font-family: 'Montserrat', sans-serif;
}

#feedbackSubmit:hover {
    background-color: var(--kPrimary);
    color: #fff;
    border-color: var(--kPrimary);
}
.btn {
        background-color: var(--kPrimary);
        color: white;
    }

</style>