<template>
  <div class="general">
    <SliderComponent text="Welcome to Vue Site Project"
     home="true">
     </SliderComponent>
    <div class="center">

      <section id="content">
        <h2 class="subheader">Last Articles</h2>
        <!--List articles-->
        <div id="articles">
          <article class="article-item" id="article-template">
            <div class="image-wrap">
              <img
                src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
                alt="Paisaje"
              />
            </div>

            <h2>Article 1</h2>
            <span class="date"> 5 min ago </span>
            <a href="#">Read More</a>

            <div class="clearfix"></div>
          </article>

          <!--ADD  ARTICLES VIA JS-->
        </div>
      </section>
      <SidebarComponent> </SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SliderComponent from "../components/SliderComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
export default {
  name: "LastArticlesComponent",
  components: {
    SliderComponent,
    SidebarComponent
  },
};
</script>

<style>
</style>
