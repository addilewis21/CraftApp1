<script setup>
import { provide, toRefs } from 'vue'
import { provideState } from './state'
import { useRoute } from 'vue-router'

import './style.css'

const state = provideState()
provide('state', state)


const route = toRefs(useRoute())
</script>

<template>
  <div class="p-10 bg-[#F19763] w-full ">
  <p class="mb-4">
    <strong class="font-semibold">Current route path:</strong> {{ route.fullPath }}
  </p>

  <main>
    <RouterView />
  </main>
</div>
</template>