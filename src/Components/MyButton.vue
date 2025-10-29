<script setup lang="ts">
const props = defineProps({
  linkText: {
    type: String,
    required: false,
    default: 'My Button',
  },
  routeName: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: false,
    default: 'secondary'
  }
})
</script>

<template>
  <router-link
    :to="{ name: props.routeName }"
  :class="props.theme"
  >
    {{ linkText }}
  </router-link>
</template>

<style scoped>
a {
  border: 1px solid burlywood;
  border-radius: 20px;
  background-color: bisque;
  padding: 5px;
  margin: 0 10px;

  &:hover {
  background-color: saddlebrown;
  color: burlywood;}

  &.primary{
    font-size: 150%;
    padding: 20px;
  }
}

</style>
