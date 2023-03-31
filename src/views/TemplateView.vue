<template>
    <div>
<!-- Headers -->

<navbar-component></navbar-component>
<!-- main -->
<main><slot></slot></main>

<!-- Footers -->
<footer-component/>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import FooterComponent from '@/components/FooterComponent'
    export default {
        name:"TemplateView",
        components:{ NavbarComponent,FooterComponent}
    }
</script>

<style>

</style>