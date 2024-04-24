<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Counter from './components/Counter1.vue'
import Timer from './components/Timer.vue'

const props = defineProps({
  id: String,
  craftType: String,
  patternName: String,
  image: String,
  projectId: String,
})

const route = useRoute()
const id = route.params.id
const form = ref(route.params)
const patternName = route.params.patternName
const craftType = route.params.craftType 
const image = route.params.image

const share = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Check out this project!',
      text: 'Here is an image from my project:',
      url: image.value,
    })
    .catch((error) => console.log('Error sharing', error));
  } else {
    console.log('Web Share API is not supported in your browser.');
  }
}

</script>

<template>

<button @click="share" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Share</button>
  
  <div class="m-auto">
    <img class="m-auto w-1/2" :src="image" alt="Project image" /> 
    <div class="text-center">
      <h3 class="text-2xl" v-if="id">{{ id }}</h3> 
      <p>{{ craftType.toUpperCase() }}</p> 
    </div>
  </div>

<div class="flex items-center space-x-2 justify-center my-4">
  <h2>Link to pattern:</h2>
  <p class="px-2 py-1 bg-gray-200">{{ patternName }}</p>
</div>

  <div class="text-center">
    <h2>Stitch Counter</h2>
    <Counter class="m-auto text-2xl" />
  </div>

  <div class="text-center my-4">
    <h2>Row Counter</h2>
    <Counter class="m-auto text-2xl" />
  </div>

  <Timer />


</template>