<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <div class="navbar-brand">
          <RouterLink to="/" class="navbar-item">
            <i class="fa-solid fa-mug-saucer"></i>
            SCA Coffee
          </RouterLink>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <RouterLink to="/" class="navbar-item">
              <i class="fa-solid fa-house"></i>
              Início
            </RouterLink>
            <RouterLink to="/cafes" class="navbar-item">
              <i class="fa-solid fa-mug-hot"></i>
              Cafés
            </RouterLink>
            <RouterLink to="/ranking" class="navbar-item">
              <i class="fa-solid fa-ranking-star"></i>
              Ranking
            </RouterLink>
            <RouterLink to="/avaliacao" class="navbar-item">
              <i class="fa-solid fa-star"></i>
              Avaliação
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<style scoped>
.header {
width: 100%;
background-color: var(--vt-c-white);
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -2px rgba(0, 0, 0, 0.1); 
  position: relative;        /* ajuda na renderização do shadow */
  z-index: 1000;
}

.navbar-brand a {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vt-c-black);
  line-height: 1.5;
  letter-spacing: 3px;
}

.navbar {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--vt-c-black);
  font-weight: bold;
  transition: background-color 0.3s ease;
  gap: .5rem;
}

.navbar-item:hover {
  color: #6d4227;
  border-radius: 4px;
  text-decoration: underline;
}
</style>
