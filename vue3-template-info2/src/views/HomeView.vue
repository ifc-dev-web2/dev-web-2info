<template>
  <div>
    <section>
      <h1>Bem-vindo à {{ title }}</h1>
      <p>{{ description }}</p>
    </section>
<!-- 
    <section class="about-card">
      <div class="about-decoration">
        <svg class="wave-top" viewBox="200 9 1012 100" preserveAspectRatio="none">
          <path
            fill="#f7f1eb"
            d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div class="about-content">
        <h2>Sobre o Campeonato</h2>
        <p>
          Este campeonato tem como objetivo promover a qualidade dos nossos cafés através de
          avaliações sensoriais baseadas nos critérios da metodologia SCA.
        </p>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Página Inicial')
const description = ref('Esta é a página inicial do seu aplicativo Vue.js.')
</script>

<!-- <style scoped>
.about-card h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #6f4e37;
}

.about-card p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #a67c52;
  letter-spacing: 0.5px;
}

.about-card {
  position: relative;
  background: #fafafa;
  padding: 80px 0;
  margin: 0 auto;
  max-width: 1200px; /* ← importante */
  border-top: 10px solid #6f4e37;
  border-bottom: 10px solid #181818;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.wave-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 0;
} -->

.about-decoration {
  position: relative;
  background: url('../assets/img/cafe-matriz.png') no-repeat left;
  background-size: contain;
  width: 60vw;
  height: 60vh;
  opacity: 0.2;
}

.about-content {
  position: relative;
  z-index: 1;
  text-align: left;
}

<style scoped > 

.about-card {
    position: relative;
  background: #fafafa;
  padding: 80px 0;
  margin: 0 auto;
  max-width: 1200px; /* ← importante */
  border-top: 10px solid #6f4e37;
  border-bottom: 10px solid #181818;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.about-decoration {
  position: relative;
  width: 45%;
  height: 500px;
  background: url('@/assets/img/cafe-matriz.png') no-repeat center;
  background-size: contain;
  opacity: 0.25;
  flex-shrink: 0;
}

.wave-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  z-index: 1;
}

.about-content {
  position: relative;
  z-index: 2;
  width: 55%;
  padding-right: 2rem;
}

.about-card h2 {
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 24px;
  text-transform: uppercase;
  color: #6f4e37;
}

.about-card p {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #6b5c4a;
}
</style>
