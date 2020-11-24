<template>
  <article class="article-item">
    <div class="image-wrap">
    <img :src='movie.imagen' :alt='movie.title'/>
    </div>

    <h2>{{ movie.title}}</h2>
    <span class="date">
      {{ movie.year }}
    </span>
    <a href="#">Read More</a>

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie'],
  mounted(){
      console.log(this.movie);
  }
};
</script>

<style>
</style>