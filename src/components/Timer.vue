<template>
  <div class="flex flex-col items-center justify-center bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">Stopwatch: {{ formattedTime }}</h2>
    <div class="flex space-x-4 mb-6">
      <button @click="startStop" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">{{ running ? 'Stop' : 'Start' }}</button>
      <button @click="reset" :disabled="!time" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Reset</button>
      <button @click="lap" :disabled="!running" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Lap</button>
    </div>
    <h2 class="text-xl font-bold mb-2">Laps:</h2>
    <ul class="list-decimal list-inside">
    <li v-for="(lap, index) in laps" :key="index" class="mb-1">{{ lap.time }} - {{ lap.date }}</li>
  </ul>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, computed } from 'vue'

let intervalId = null
const running = ref(false)
const time = ref(0)
const laps = ref([])

const startStop = () => {
  if (running.value) {
    clearInterval(intervalId)
  } else {
    intervalId = setInterval(() => {
      time.value++
    }, 1000)
  }
  running.value = !running.value
}

const reset = () => {
  clearInterval(intervalId)
  running.value = false
  time.value = 0
  laps.value = []
}

const lap = () => {
  const date = new Date()
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
  laps.value.push({ time: formatTime(time.value), date: formattedDate })
}

watch(running, (newVal) => {
  if (!newVal) {
    clearInterval(intervalId)
  }
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const formatTime = (time) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const formattedTime = computed(() => formatTime(time.value))
</script>