<script setup>
  import { RouterView } from 'vue-router';
  import Header from './components/Header.vue';

  const data = {
    msg:"Ejemplos en ",
    description:"tu puta madre"
  }
</script>

<template>
<!-- Componentes y vistas -->
  <Header :msg="data.msg" :description="data.description"/>
  <!-- RouterView renderiza los componentes de los links (del navbar) -->
  <RouterView />
</template>

<style>
/* Importación de los estilos globales */
@import '@/assets/base.css';
</style>

