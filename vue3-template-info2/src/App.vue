<template>
 <AppHeader />
  <main class="main">
       <RouterView />
  </main>
<AppFooter />

</template>

<script setup>
import {RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
</script>

<style scoped>
.main {
  padding: 10px;
  background: #fafafa;
  color: #333;
  width: 1200px;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
