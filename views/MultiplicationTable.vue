<script setup lang="ts">

import { ref } from 'vue'

let rows= ref(10)
let cols= ref(10)
let name = ref(null)
let shouldCalculate = ref(true)
let shouldHighlighted = ref(null)
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

    <label id="shouldCalculate">
      <span> Do you want to calculate the values?</span>
      <input type="checkbox" id="shouldCalculates" v-model="shouldCalculate"/>
    </label>

    <label for="shouldHighlighted">
      <span>Which col & row do you want to highlight?</span>
      <input type="number" id="shouldHighlighted" v-model.number="shouldHighlighted" />
    </label>

    <p v-if="name">Hi there <span v-html="name"/>, let's build our table:</p>
    <p v-else> Hi there!</p>

    <p> How many rows do I have {{ rows }}</p>
    <p> How many cols do I have {{ cols }}</p>
    <p> Should we calculate the times table value? {{ shouldCalculate }} </p>


    <table>
      <tr v-for="row in rows" :key="row" :class="{ 'highlighted' : row === shouldHighlighted }">
        <td v-for="col in cols" :key="col" :class="{ 'highlighted' : col === shouldHighlighted }">
          <template v-if="shouldCalculate === true">
            {{ row * col }}
          </template>

          <template v-else>
            {{ row }} * {{ col }}
          </template>
        </td>

      </tr>
    </table>

  </div>
</template>


<style scoped>
div.inputs {
  max-width: 50%;
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



  table{
    border: 1px solid black;
    border-collapse: collapse;
    max-width: 80%;

    tr,td {
      text-align: center;
      &.highlighted {
        background-color: lightblue;
        padding: 5px;
      }

    }
  }
}
</style>
