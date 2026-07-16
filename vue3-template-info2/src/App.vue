<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="main">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
import {RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-top:100px;
  background: #fafafa;
  color: #333;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .main {
    padding: 1.5rem 1rem;
    padding-top: 90px;
    min-height: calc(100vh - 120px);
  }
}

@media (max-width: 480px) {
  .main {
    padding: 1rem 0.8rem;
    padding-top: 90px;
    min-height: calc(100vh - 120px);
  }
}
</style>
