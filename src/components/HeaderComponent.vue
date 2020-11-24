<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand"> <strong>Project</strong>Vue </span>
      </div>
      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Home</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/form" active-class="active">Form</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">About Us</router-link>
          </li>
               <li>
            <router-link to="/movies" active-class="active">Movie</router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active">Contact</router-link
            >
          </li>
     
        </ul>
      </nav>
      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
</style>
