<template>
<div>
    <section class=" top-nav py-2 " >
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <span style="padding-right: 10px; color:white;"><a href="" target="_blank">{{ company.email }}</a></span>
            </div>
            <div class="text-white d-flex align-items-center">
                <span><a href="" target="_blank"><i class="fa-brands fa-facebook  text-white"></i> </a></span>

                <span class="mx-2"><a href="" target="_blank"><i class="fa-brands fa-youtube text-white"></i></a></span>

                <span class="ms-2">|</span>
                <a class="ms-2 btn btn-sm text-white" href="/admin/login" target="black">Login</a>
            </div>
        </div>
    </section>

    <section>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#"><img :src="company.logo" alt="" style="height: 45px; "></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="nav-menu navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#product">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active " aria-current="page" href="#contact">Contact</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </section>

      



</div>
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

<style scoped>
.top-nav {
    background: var(--kPrimary);
    height: 40px;
    font-size: 14px;
    transition: all 0.5s;
    color: #fff;
}

.navbar {
    background: #fff;
    transition: all 0.5s;
    z-index: 997;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

.navbar.navbar-scrolled {
    top: 0;
    padding: 15px;
}

.nav-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav-menu>ul {
    display: flex;
}

.nav-menu>ul>li {
    position: relative;
    white-space: nowrap;
    padding: 10px 0 10px 28px;
}

.nav-menu a {
    display: block;
    position: relative;
    color: #222222;
    transition: 0.3s;
    font-size: 15px;
    font-weight: 600;
    padding: 0 3px;
    font-family: "Open Sans", sans-serif;
}

.nav-menu>ul>li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--kParagraph);
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
}

.nav-menu a:hover:before,
.nav-menu li:hover>a:before,
.nav-menu .active>a:before {
    visibility: visible;
    width: 100%;
}

.nav-menu a:hover,
.nav-menu .active>a,
.nav-menu li:hover>a {
    color: var(--kParagraph);
}

.nav-menu .drop-down ul {
    display: block;
    position: absolute;
    left: 26px;
    top: calc(100% + 30px);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
}

.nav-menu .drop-down:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
}

.nav-menu .drop-down li {
    min-width: 180px;
    position: relative;
}

.nav-menu .drop-down ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #062b5b;
}

.nav-menu .drop-down ul a:hover,
.nav-menu .drop-down ul .active>a,
.nav-menu .drop-down ul li:hover>a {
    color: var(--kParagraph);
}

.nav-menu .drop-down>a:after {
    content: "\ea99";
    font-family: IcoFont;
    padding-left: 5px;
}

.nav-menu .drop-down .drop-down ul {
    top: 0;
    left: calc(100% - 30px);
}

.nav-menu .drop-down .drop-down:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
}

.nav-menu .drop-down .drop-down>a {
    padding-right: 35px;
}

.nav-menu .drop-down .drop-down>a:after {
    content: "\eaa0";
    font-family: IcoFont;
    position: absolute;
    right: 15px;
}

</style>
