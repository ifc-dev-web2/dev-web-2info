<template>
  <div>
    <section class="intro">
      <div class="intro-content">
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
        <p>{{ description }}</p>
      </div>
    </section>

    <section class="coffees">
      <!-- coffee-card-1 -->
      <div class="card-coffees card-coffees__participantes">
        <div class="coffee-ico">
          <i class="fa-solid fa-people-group"></i>
        </div>
        <div class="coffee-description">
          <p>Cafés Participantes</p>
          <span> 4</span>
        </div>
      </div>
      <!-- coffee-card-2 -->
      <div class="card-coffees card-coffees__avaliacoes">
        <div class="coffee-ico">
          <i class="fa-solid fa-clipboard-list"></i>
        </div>
        <div class="coffee-description">
          <p>Avaliações Registradas</p>
          <span> 190</span>
        </div>
      </div>
    </section>
    <!-- button ação para ver todos os cafés avaliados -->
    <div class="coffees-button">
      <RouterLink to="/cafes" class="button-primary">
        <i class="fa-solid fa-mug-hot"></i>
        Ver Café
      </RouterLink>
    </div>

    <section class="about-card">
      <div class="about-decoration"></div>
      <div class="about-content">
        <h2>Sobre o Campeonato</h2>
        <p>
          Este campeonato tem como objetivo promover a qualidade dos nossos cafés através de
          avaliações sensoriais baseadas nos critérios da metodologia SCA.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('SCA Brazil 2026')
const subtitle = ref('Campeonato de Avaliação Sensorial de Cafés')
const description = ref('Avalie, compare e descubra os melhores cafés através dos seus sentidos.')
</script>

<style scoped>
.intro {
  background: url('@/assets/img/coffee-bg.jpg') no-repeat center;
  background-size: cover;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
}

.intro-content h1 {
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: bolder;
  letter-spacing: 5px;
  text-shadow: 5px 5px #181818; /* offset-x | offset-y | blur-radius | color */
}

.intro-content h3 {
  font-size: 1.2rem;
  text-align: center;
  font-weight: bolder;
  letter-spacing: 5px;
  text-shadow: 1px 2px #181818;
  border-bottom: 1px solid #18181839;
  text-transform: uppercase;
}

.coffees {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.card-coffees {
  min-width: 30%;
  height: 200px;
  border: 1px solid #492d1c;
  margin: 30px;
  border-radius: 10px;
  background-color: #faf4ef;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coffee-ico {
  border-radius: 50%;
  min-width: 30%;
  font-size: 4em;
  text-align: center;
}

.card-coffees__participantes {
  background-color: #f9f4ee;
  border: 1px solid #492d1c24;
}

.card-coffees__participantes .coffee-ico {
  background-color: #e7dbcf;
  color: #492d1c;
}

.card-coffees__avaliacoes {
  background-color: #f5f5ed;
  border: 1px solid #60684521;
}

.card-coffees__avaliacoes .coffee-ico {
  background-color: #dce0cb;
  color: #606845;
}

.coffee-description {
  text-align: center;
}
.coffee-description p {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

.coffee-description span {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}

.coffees-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.button-primary {
  padding: 20px;
  width: 300px;
  color: white;
  background: #492d1c;
  font-size: 1.2em;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
}

.button-primary :hover {
  color: rgb(221, 239, 15);
  background: #af6334;
}

.about-card {
  position: relative;
  background: #fafafa;
  padding: 80px 0;
  margin: 0 auto;
  max-width: 1200px; /* ← importante */
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
