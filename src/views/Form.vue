<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Form</h2>
      </section>
      <SidebarComponent> </SidebarComponent>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
export default {
  name: "Form",
  components: {
    SidebarComponent,
  },
};
</script>

<style>
</style>