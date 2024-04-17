<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = inject('state')
</script>

<template>
  <h2>Project View</h2>
  <h3>{{ state.projectName }}</h3> 
  <p>{{ state.craftType }}</p> 
  <img v-if="state.image" :src="state.image" class="mt-4 w-1/2">
</template>