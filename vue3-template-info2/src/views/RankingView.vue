<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Ranking')
const description = ref('Esta é a página de ranking do cafés.')
</script>

<style scoped></style>
