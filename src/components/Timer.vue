<template>
  <div class="flex flex-col items-center justify-center bg-[#B1BA7D]">
    <h2 class="text-2xl font-bold mb-4 mt-10">Stopwatch: {{ formattedTime }}</h2>
    <div class="flex space-x-4 mb-6">
      <button @click="startStop" class="px-4 py-2 bg-[#7D842A] text-white rounded hover:bg-[#4E5410]">{{ running ? 'Stop' : 'Start' }}</button>
      <button @click="reset" :disabled="!time" class="px-4 py-2 bg-[#E55439] text-white rounded hover:bg-[#AF3B25]">Reset</button>
      <button @click="lap" :disabled="!running" class="px-4 py-2 bg-[#F19763] text-white rounded hover:bg-[#D06F37]">Lap</button>
    </div>
    <h2 class="text-xl font-bold mb-2">Laps:</h2>
    <ul class="list-decimal list-inside p-8  text-center mb-10">
      <li v-for="(lap, index) in laps" :key="index" class="mb-1 text-xl" :class="{ 'bg-[#FAAE82] p-3': index % 2 === 0, 'bg-[#F17861] p-3': index % 2 !== 0 }">{{ lap.time }} - {{ lap.date }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, computed, withDefaults, defineProps, defineEmits } from 'vue'

const props = withDefaults(defineProps(), {})
const emit = defineEmits(['update'])

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
  emit('update', { time: time.value, laps: laps.value })
})

const formatTime = (time) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const formattedTime = computed(() => formatTime(time.value))
</script>