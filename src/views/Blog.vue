<template>
  <div class="general">
    <SliderComponent text="Blog"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
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
  name: "Blog",
   components: {
    SliderComponent,
    SidebarComponent
  },
};
</script>

<style>
</style>