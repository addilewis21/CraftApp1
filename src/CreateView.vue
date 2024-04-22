<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({ projectName: '', craftType: '', image: '', link: '', projectType: '', projectId: '' })

// The rest of your script code

const saveForm = () => {
  router.push({ name: 'Project', params: { id: state.projectId, projectType: state.projectType, ...state } })
}
</script>

<template>
  <form @submit.prevent="saveForm">
    <h2 class="text-2xl font-bold mb-4">CreateView</h2>

    <h2 for="projectId" class="my-4">Project ID:</h2>
    <input id="projectId" type="text" v-model="state.projectId" class="border border-gray-300 p-2 w-full mt-2">

    <h2 for="projectType" class="my-4">Project Type:</h2>
    <button id="projectType" type="button" @click="state.projectType = 'Knit'" :class="{'bg-blue-700': state.projectType === 'Knit', 'bg-blue-500': state.projectType !== 'Knit'}" class="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Knit</button>
    <button id="projectType" type="button" @click="state.projectType = 'Crochet'" :class="{'bg-green-700': state.projectType === 'Crochet', 'bg-green-500': state.projectType !== 'Crochet'}" class="hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Crochet</button>

    <h2 class="my-4">Image Upload:</h2>
    <input type="file" id="file" @change="onFileChange" class="hidden">
    <label for="file" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Choose File</label>
    <img v-if="state.image" :src="state.image" class="mt-4 w-1/2">

    <h2 class="my-4">Pattern link:</h2>
    <input id="link" type="text" v-model="state.link" class="border border-gray-300 p-2 w-full mt-2">

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Create</button>
  </form>
</template>