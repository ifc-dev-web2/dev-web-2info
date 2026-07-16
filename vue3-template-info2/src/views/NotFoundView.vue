<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('404 - Página não encontrada')
const description = ref('A página que você está procurando não foi encontrada.')
</script>

<style scoped></style>
