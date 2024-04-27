<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import Counter from './components/Counter1.vue'
import Timer from './components/Timer.vue'
import { useStore } from 'vuex';

const count1 = ref(null)

const props = defineProps({
  id: String,
  craftType: String,
  patternName: String,
  image: String,
  projectId: String,
})

const route = useRoute()
const id = ref(route.params.id)
const form = ref(route.params)
const patternName = ref(route.params.patternName)
const craftType = ref(route.params.craftType)
const image = ref(route.params.image)

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

onBeforeUnmount(() => {
  store.dispatch('saveCounterAmounts', { projectId: id.value, counterAmounts: counter1.value })
  // Replace counter2.value with your actual timer reference
  store.dispatch('saveTimerWithLaps', { projectId: id.value, timerWithLaps: counter2.value })
})

const counter1 = ref(null)
const counter2 = ref(null)

const saveProject = () => {
  const project = {
    id: id.value,
    patternName: patternName.value,
    craftType: craftType.value,
    image: image.value,
    counterAmounts: store.state.counterAmounts[id.value],
    timerWithLaps: store.state.timerWithLaps[id.value],
  };

  if (counter1.value) {
    store.dispatch('saveCounterAmounts', { projectId: id.value, counterAmounts: counter1.value.count })
  }

  console.log(project) // Print the project details to the console
  
  store.dispatch('addProject', project);
};

const editMode = ref(false)

</script>

<template>

<div class="bg-[#F3D3BE]">

  <div class="flex justify-end right-0 p-4">
    <button @click="saveProject" class="bg-[#B1BA7D] text-black hover:bg-[#7D842A] hover:text-white font-bold py-4 px-6 rounded mt-4 mx-2 text-2xl">Save</button>
    <button @click="share" class="bg-[#B1BA7D] text-black hover:bg-[#7D842A] hover:text-white font-bold py-4 px-6 rounded mt-4 mx-2 text-2xl">Share</button>
    <button @click="editMode = !editMode" class="bg-[#B1BA7D] text-black hover:bg-[#7D842A] hover:text-white font-bold py-4 px-6 rounded mt-4 mx-2 text-2xl">{{ editMode ? 'Save Changes' : 'Edit' }}</button>
  </div>

  <div class="m-auto ">
    <div class="m-auto ">
  <img class="m-auto p-4 w-1/4 " :src="image" alt="Project image" /> 
  <div class="text-center bg-[#E55439] p-2 text-white w-1/2 m-auto">
    <h3 class="text-3xl font-semibold" v-if="id && !editMode">{{ id }}</h3> 
    <div v-if="editMode">
  <input v-model="id" type="text" placeholder="ID" class="text-black !important">
</div>
    <p v-if="!editMode">{{ craftType?.toUpperCase() }}</p> 
    <div v-if="editMode">
  <input v-model="craftType" type="text" placeholder="Craft Type" class="text-black !important">
</div>
  </div>
</div>
  </div>

  <div class="flex items-center space-x-2 justify-center my-4 ">
  <h2 class="text-xl">Link to pattern:</h2>
  <p v-if="!editMode" class="px-2 py-1 border-2 border-[#E55439] bg-[#FCEEE5]">{{ patternName }}</p>
  <div v-if="editMode">
  <input v-model="patternName" type="text" placeholder="Pattern Name" class="text-black !important">
</div>
</div>

  <div class="text-center my-4 bg-[#F19763] p-3 w-1/4 m-auto">
    <h2 class="text-lg">Stitch Counter</h2>
    <Counter ref="counter1" class="m-auto text-2xl" />
  </div>

  <div class="text-center my-4 bg-[#F19763] p-3 w-1/4 m-auto">
    <h2 class="text-lg">Row Counter</h2>
    <Counter ref="counter2" class="m-auto text-2xl" />
  </div>

  <Timer />

</div>
</template>