<template>
  <footer class="footer">
    <div class="footer-content">
       <p>&copy; 2026 SCA Brazil - Café. Todos os direitos reservados.</p>
         <p>Programado por  
            <a 
              href="https://www.linkedin.com/in/cristofersousa/" 
              target="_blank">
              <i class="fa-brands fa-dev"></i>Cristofer Sousa
            </a>
          </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer a {
   color: gold;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
  color: gold;
}

/* Responsivo */
@media (max-width: 768px) {
  .footer {
    padding: 1.8rem 1rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem;
    font-size: 0.95rem;
  }
}
</style>