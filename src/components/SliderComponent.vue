<template>
  <div id="slider" :class="{
    'slider-big':home,
    'slider-small':!home
    }">
    <h1>{{text}}</h1>
  
       <router-link to="/blog" class="btn-white" v-if="home">Blog</router-link>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  props:['text','home']
}
</script>

<style>
</style>
