<template>
  <nav class="navbar">
    <ul>
      <li><RouterLink to="/">Counter</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
.navbar {
  background-color: #333;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.2rem;

    }

    // Clase por defecto del vue-router
    .router-link-active {
      color: #c8eb79;
      text-decoration: underline;
    }
  }
}
</style>