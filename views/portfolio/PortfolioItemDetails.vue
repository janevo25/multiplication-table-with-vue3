<script setup>
import { useRoute } from "vue-router";
import portfolioData from '@/data/portfolio.json'



const route =useRoute()
const itemData = portfolioData.filter(portfolioThing => portfolioThing.id === Number(route.params.portfolioId)) [0]
</script>

<template>
  <div v-if="itemData">
    <div class="top-line">
    <h1>{{ itemData.title }}</h1>
      <img :src="itemData.thumbnail"/>
  </div>
  </div>

  <p v-else>Sorry, this id does not exist!</p>
</template>

<style scoped>
.top-line{
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
}
</style>
