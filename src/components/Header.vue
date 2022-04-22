<script setup>
import NavBar from './NavBar.vue';

// Definimos las propiedades que nos llegan en:
// <HelloWorld msg="mensaje" />
defineProps({
  msg:String
})
</script>

<template>
  <div class="header">
    <!-- Luego se puede utilizar esa propiedad entre {{}} -->
    <div class="title">
      <h1>{{ msg }}</h1>
      <img src="@/assets/logo.svg" alt="">
    </div>
    <NavBar />
  </div>
</template>

<style scoped lang="scss">
.header {
  h1 {
    font-weight: 500;
    font-size: 3rem;
    text-align: center;
    color: #c8eb79;
  }

  .title{
    background-color: #1d1d1d;
    display: flex;
    padding-inline: 2rem;

    img{
      max-width: 4rem;
    }
  }
}
</style>
