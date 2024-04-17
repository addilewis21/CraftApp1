<script setup>
import { provide } from 'vue'
import { provideState } from './state'
import './style.css'

const state = provideState()
provide('state', state)
</script>

<template>
  <div class="m-10">
  <p class="mb-4">
    <strong class="font-semibold">Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav class="mb-4">
    <RouterLink class="text-blue-500 hover:text-blue-700 mr-4" to="/home">Go to Home</RouterLink>
    <RouterLink class="text-blue-500 hover:text-blue-700 mr-4" to="/create">Go to Create</RouterLink>
    <RouterLink class="text-blue-500 hover:text-blue-700" to="/project">Go to Project</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</div>
</template>