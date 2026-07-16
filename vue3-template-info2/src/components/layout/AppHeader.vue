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

        <!-- Menu Desktop -->
        <div class="navbar-menu desktop">
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

        <!-- Botão Hamburger -->
        <button class="hamburger" @click="toggleMenu" aria-label="Menu">
          <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Menu Mobile -->
        <div class="mobile-menu" 
          :class="{ active: isMenuOpen }"
          @click.self="closeMenu">
          <div class="mobile-menu-content" @click.stop>
            <RouterLink to="/" class="navbar-item" @click="closeMenu">
              <i class="fa-solid fa-house"></i>Início</RouterLink
            >
            <RouterLink to="/cafes" class="navbar-item" @click="closeMenu">
              <i class="fa-solid fa-mug-hot"></i>Cafés</RouterLink
            >
            <RouterLink to="/ranking" class="navbar-item" @click="closeMenu">
              <i class="fa-solid fa-ranking-star"></i>Ranking</RouterLink
            >
            <RouterLink to="/avaliacao" class="navbar-item" @click="closeMenu">
              <i class="fa-solid fa-star"></i>Avaliação</RouterLink
            >
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
<style scoped>
.header {
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--vt-c-white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 1100;
}

.navbar {
  background-color: var(--vt-c-white);
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Hamburger */
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: var(--vt-c-black);
  cursor: pointer;
}


.navbar-item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--vt-c-black);
  font-weight: bold;
  transition: background-color 0.3s ease;
  gap: 0.5rem;
}

.navbar-item:hover {
  color: #6d4227;
  padding: 0 0 20px 0;
  border-bottom: 2px solid #6d4227;
}

/* Menu Mobile */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.mobile-menu.active {
  display: flex;
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
}

.mobile-menu-content .navbar-item {
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.mobile-menu-content .navbar-item:hover {
  color: var(--vt-c-yellow);
  text-decoration: none;
}

/* Responsivo */
@media (max-width: 1024px) {
  .desktop {
    display: none;
  }

  .hamburger {
    display: block;
  }
}

</style>
