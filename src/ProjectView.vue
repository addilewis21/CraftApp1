<script setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import Counter from './components/Counter1.vue'
import Timer from './components/Timer.vue'
import { useStore } from 'vuex'

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

const store = useStore()

const saveProject = () => {
  const project = {
    id: id.value,
    craftType: craftType.value,
    patternName: patternName.value,
    image: image.value,
  }

  console.log(project) // Print the project details to the console

  store.commit('addProject', project)
}


</script>

<template>
<div class="bg-[#F3D3BE]">

  <div class="flex justify-end right-0 p-4">
    <button @click="saveProject" class="bg-[#B1BA7D] text-black hover:bg-[#7D842A] hover:text-white font-bold py-4 px-6 rounded mt-4 mx-2 text-2xl">Save</button>
    <button @click="share" class="bg-[#B1BA7D] text-black hover:bg-[#7D842A] hover:text-white font-bold py-4 px-6 rounded mt-4 mx-2 text-2xl">Share</button>
  </div>

  <div class="m-auto ">
    <img class="m-auto p-4 w-1/4 " :src="image" alt="Project image" /> 
    <div class="text-center bg-[#E55439] p-2 text-white w-1/2 m-auto">
      <h3 class="text-3xl font-semibold" v-if="id">{{ id }}</h3> 
      <p>{{ craftType.toUpperCase() }}</p> 
    </div>
  </div>

<div class="flex items-center space-x-2 justify-center my-4 ">
  <h2 class="text-xl">Link to pattern:</h2>
  <p class="px-2 py-1 border-2 border-[#E55439] bg-[#FCEEE5]">{{ patternName }}</p>
</div>

  <div class="text-center my-4 bg-[#F19763] p-3 w-1/4 m-auto">
    <h2 class="text-lg">Stitch Counter</h2>
    <Counter class="m-auto text-2xl" />
  </div>

  <div class="text-center my-4 bg-[#F19763] p-3 w-1/4 m-auto">
    <h2 class="text-lg">Row Counter</h2>
    <Counter class="m-auto text-2xl" />
  </div>

  <Timer />

</div>
</template>