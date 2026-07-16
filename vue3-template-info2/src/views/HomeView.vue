<template>
  <div>
    <section>
      <h1>Bem-vindo à {{ title }}</h1>
      <p>{{ description }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Página Inicial')
const description = ref('Esta é a página inicial do seu aplicativo Vue.js.')
</script>

<style scoped > 
</style>
