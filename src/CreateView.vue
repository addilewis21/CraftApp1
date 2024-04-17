<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = inject('state')

const image = ref(null)
const link = ref('')
const projectType = ref('')

const onFileChange = (e) => {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length) return
  createImage(files[0])
}

const selectCraftType = (type) => {
  state.craftType = type
}

const createImage = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    image.value = e.target.result
  }
  reader.readAsDataURL(file)
}

const saveForm = () => {
  state.link = link.value
  state.image = image.value
  state.projectType = projectType
  state.craftType = projectType // Add this line
  router.push({ path: '/Project' })
}
</script>

<template>
  <form @submit.prevent="saveForm">
  
    <h2 class="text-2xl font-bold mb-4">CreateView</h2>

    <h2 class="my-4">Project Name:</h2>
    <input type="text" v-model="state.projectName" class="border border-gray-300 p-2 w-full mt-2">

    <h2 class="my-4">Project Type:</h2>
  <button type="button" @click="projectType = 'Knit'" :class="{'bg-blue-700': projectType === 'Knit', 'bg-blue-500': projectType !== 'Knit'}" class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Knit</button>
  <button type="button" @click="projectType = 'Crochet'" :class="{'bg-green-700': projectType === 'Crochet', 'bg-green-500': projectType !== 'Crochet'}" class="hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Crochet</button>

    <h2 class="my-4">Image Upload:</h2>
    <input type="file" id="file" @change="onFileChange" class="hidden">
    <label for="file" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Choose File</label>
    <img v-if="image" :src="image" class="mt-4 w-1/2">

    <h2 class="my-4">Pattern link:</h2>
    <input type="text" v-model="link" class="border border-gray-300 p-2 w-full mt-2">

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Create</button>
  </form>
</template>