<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Café Detalhes')
const description = ref('Esta é a página de detalhes do café.')

</script>

<style scoped>
</style>