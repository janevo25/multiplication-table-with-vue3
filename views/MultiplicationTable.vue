<script setup lang="ts">

import { ref } from 'vue'

let rows= ref(10)
let cols= ref(10)
let name = ref(null)
</script>

<template>
  <h1> My multiplication will live here</h1>
  <div class="inputs">
    <label id="name">
      <span> What's Your Name</span>
      <input id="name" v-model="name"/>
    </label>

      <label id="rows">
        <span> Rows:</span>
        <input type="number" id="rows" v-model="rows"/>
      </label>

    <label id="cols">
      <span> Cols:</span>
      <input type="number" id="cols" v-model="cols"/>
    </label>

    <p v-if="name">Hi there <span v-html="name"/>, let's build our table:</p>
    <p v-else> Hi there!</p>

    <p> How many rows do I have {{ rows }}</p>
    <p> How many cols do I have {{ cols }}</p>


    <table>
      <tr v-for="row in rows" :key="row">
        <td v-for="col in cols" :key="col">
          {{ row * col }}
        </td>

      </tr>
    </table>

  </div>
</template>


<style scoped>
div.inputs {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;


  label{
    padding: 10px;
    border: 1px solid black;
    display: flex;
    gap: 15px;

  }
}
</style>
