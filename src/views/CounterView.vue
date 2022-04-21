<script setup>
import Counter from "@/components/Counter.vue";

</script>

<template>
  <!-- Componentes -->
  <h1 class="">Contador</h1>
  <Counter />
</template>

<!-- Con scoped, trabajamos solo el style de este componente -->
<style scoped>
  h1 {
    font-weight: 700;
    text-align: center;
  }
</style>