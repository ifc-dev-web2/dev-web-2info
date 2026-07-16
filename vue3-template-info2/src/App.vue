<template>
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
  </section>
  <footer class="footer">
    <p>&copy; 2026 SCA Brazil - Café. Todos os direitos reservados.</p>
    Programado por <a href="https://www.linkedin.com/in/cristofersousa/" target="_blank">Cristofer Sousa</a>
  </footer>
</template>

<style scoped>


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
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  background: #fafafa;
  padding: 60px;
  width: 100vw;
  border-top: 10px solid #6f4e37;
  border-bottom: 10px solid #181818;
}

.wave-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 0;
}

.about-decoration {
  background: url('@/assets/img/cafe-matriz.png') no-repeat left;
  width: 60vw;
  height: 60vh;
  opacity: 0.2;
}

.about-content {
  position: relative;
  z-index: 1;
  width: 100vw;
  text-align: left;
}

.footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.footer a {
  color: #fff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
  color: gold;
}
</style>
