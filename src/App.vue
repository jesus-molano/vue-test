<script setup>
  import { RouterView } from 'vue-router';
  import Header from './components/Header.vue';
</script>

<template>
<!-- Componentes y vistas -->
  <Header msg="Ejemplos en " />
  <!-- RouterView renderiza los componentes de los links (del navbar) -->
  <RouterView />
</template>

<style>
/* Importación de los estilos globales */
@import '@/assets/base.css';
</style>
