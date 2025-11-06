<!-- src/App.vue -->
<template>
  <div id="app">
    <nav class="main-nav">
      <ul>
        <li><router-link to="/">Carátula</router-link></li>
        <li><router-link to="/sobre-mi">Sobre mí</router-link></li>
        <li><router-link to="/educacion">Educación</router-link></li>
        <li><router-link to="/experiencia">Experiencia</router-link></li>
        <li><router-link to="/trabajo">Trabajo</router-link></li>
        <li><router-link to="/cierre">Cierre</router-link></li>
      </ul>
    </nav>

    <main class="page-container">
      <router-view />
    </main>
  </div>
</template>

<style>
/* estilos globales mínimos para la navegación */
:root{
  --nav-bg: #333;
  --nav-text: #fff;
  --accent: #ffcc00;
}

body, html, #app {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* nav fija arriba */
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--nav-bg);
  z-index: 100;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.main-nav ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0.6rem 1rem;
  align-items: center;
}

.main-nav a {
  color: var(--nav-text);
  text-decoration: none;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
}

.main-nav a.router-link-active {
  background: rgba(255,255,255,0.06);
}

.main-nav a:hover {
  color: var(--accent);
}

/* deja espacio para el nav fijo */
.page-container {
  padding-top: 64px; /* ajustar si cambias la altura del nav */
  min-height: calc(100vh - 64px);
}

/* util común para centrar secciones (los componentes usan esto) */
.center-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px); /* pantalla menos nav */
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
}
</style>
