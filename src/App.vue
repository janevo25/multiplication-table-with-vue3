<script setup>
</script>

<template>
  <section class="web-app-container">
    <header>
      <h1>Multiplication Table Project</h1>
      <h3>Create your own multiplication table that is rendered with an HTML table!</h3>

      <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'MultiplicationTable' }">Multiplication Table</router-link>
        <router-link :to="{ name: 'AboutMe' }">About Me</router-link>
      </nav>
    </header>

    <section class="page-content">
      <router-view />
    </section>

    <footer>
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

header {
  text-align: center;
  padding: 10px 0;
}

nav {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;
}

section.page-content {
  margin: 10px 0;
  background-color: lightgray;
  padding: 20px;
}

footer p {
  text-align: center;
  padding: 10px 0;
}
</style>
