<script setup>
import { useCounterStore } from "@/stores/counter.js";

// Te pasa la useStore a ref (con la que puedes desestructurar)
import { storeToRefs } from "pinia";

const store = useCounterStore();
//Desestructuración de la store para evitar => store.counter, store.dou...
const { counter, doubleCount } = storeToRefs(store);
</script>

<template>
  <div class="counter">
    <div>Count: {{ counter }}</div>
    <div>Double: {{ doubleCount }}</div>

    <!-- Las funciones no se pueden desestructurar -->
    <button @click="store.increment()">Incrementar</button>
    <!-- store.$ejemplo() será una función por defecto del store -->
    <button class="reset" @click="store.$reset()">Reset</button>
  </div>
</template>

<style lang="scss">
// En Vue se puede trabajar con sass poniendo lang="scss" en el style
.counter {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  width: min(100%, 300px);
  margin: 0 auto;

  button {
    padding: 1rem;
    border-radius: 16px;
    border: 1px solid #333;
    width: min(60%, 10rem);

  }

  .reset {
    background-color: rgb(158, 55, 55);
    color: #fff;
  }
}
</style>
