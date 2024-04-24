<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({ projectName: '', craftType: '', image: '', projectType: '', patternName: '' })

const onFileChange = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = (e) => {
    state.image = e.target.result
  }

  reader.readAsDataURL(file)
}

const saveForm = () => {

  router.push({ 
    name: 'Project', 
    params: { 
      id: state.projectId, 
      patternName: state.patternName, 
      craftType: state.craftType, 
      ...state 
    } 
  })
}
</script>

<template>
  <form @submit.prevent="saveForm">
    <h2 class="text-2xl font-bold mb-4">CreateView</h2>

    <h2 for="projectId" class="my-4">Project ID:</h2>
    <input id="projectId" type="text" v-model="state.projectId" class="border border-gray-300 p-2 w-full mt-2">

    <h2 for="craftType" class="my-4">Project Type:</h2>
<select id="craftType" v-model="state.craftType" class="border border-gray-300 p-2 w-full mt-2">
  <option disabled value="">Please select a project type</option>
  <option>Knit</option>
  <option>Crochet</option>
</select>

    <h2 class="my-4">Image Upload:</h2>
    <input type="file" id="file" @change="onFileChange" class="hidden">
    <label for="file" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Choose File</label>
    <img v-if="state.image" :src="state.image" class="mt-4 w-1/2">


    <h2 for="patternName" class="my-4">Pattern Link:</h2>
<input id="patternName" type="text" v-model="state.patternName" class="border border-gray-300 p-2 w-full mt-2">

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Create</button>
  </form>
</template>