<template>
  <section class="center-section">
    <img :src="`${import.meta.env.BASE_URL}images/5.png`" alt="MiTrabajo" />
    <h2>Mi trabajo</h2>
  </section>
</template>

<style scoped>
section img {
  max-width: 70%;
  max-height: 56vh;
  border-radius: 12px;
  margin-bottom: 1rem;
  object-fit: contain;
}
</style>
