<script setup lang="ts">
import MyButton from '@/Components/MyButton.vue'
</script>

<template>
  <nav>
    <my-button link-text="Home"  route-name="Home" theme="primary"/>
    <my-button link-text="AboutMe" route-name="AboutMe"/>
    <my-button link-text="MultiplicationTable" route-name="MultiplicationTable"/>
    <my-button link-text="My Portfolio" route-name="PortfolioLandingPage"/>

  </nav>
</template>

<style scoped>
nav{
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;

    &.router-link-active {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
