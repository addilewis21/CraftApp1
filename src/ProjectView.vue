<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const form = ref(route.params)
const projectType = route.params.projectType
</script>

<template>
  <h2>Project View</h2>
  <h3 v-if="id">{{ id }}</h3> 
  <h2>Project Type:</h2>
  <p v-if="id">{{ projectType }}</p>
  <div v-if="form.value">
    <p>{{ form.value.projectName }}</p>
    <p>{{ form.value.craftType }}</p>
    <img v-if="form.value.image" :src="form.value.image" class="mt-4 w-1/2">
  </div>
</template>