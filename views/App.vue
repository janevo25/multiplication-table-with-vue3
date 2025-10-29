<script setup>
import Navbar from '@/Navbar.vue'
</script>

<template>
  <section class="web-app-container">
    <header>
      <h1>Multiplication Table Project</h1>
      <h3>Create your own multiplication table that is rendered with an HTML table!</h3>

      <navbar/>
    </header>

    <section class="page-content">
      <router-view />
    </section>

    <footer>
      <navbar/>
      <p>Created by Jane in 2025</p>
    </footer>
  </section>
</template>

<style scoped>
section.web-app-container {
  max-width: 80%;
  border: 1px solid black;
  margin: 0 auto;
}

section.web-app-container section.page-content {
  margin: 10px 0;
  background-color: white;
  padding: 20px;
}

footer p {
  text-align: center;
}
</style>
