<template>
  <main class="main">
       <RouterView />
  </main>
</template>

<script setup>
import {RouterView } from 'vue-router'
</script>

<style scoped>
.main {
  background: #fafafa;
  color: #333;
  width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
