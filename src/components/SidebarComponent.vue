<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>You can do</h3>
      <a href="#" class="btn btn-success">Add Articles</a>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Search</h3>
      <p>Find the article that are you looking</p>
      <form>
        <input type="text" name="search" />
        <input type="submit" name="submit" value="Search" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style>
</style>
