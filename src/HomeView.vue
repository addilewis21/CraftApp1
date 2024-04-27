<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const projects = computed(() => store.state.projects)

const selectProject = (project) => {
  router.push({ name: 'ProjectView', params: { id: project.id } })
}

const deleteProject = async (project) => {
  await store.dispatch('deleteProject', project.id)
}

defineExpose({
  projects,
  selectProject,
  deleteProject
})
</script>

<template>
  <h2>Home View</h2>

  <router-link to="/create" class="flex items-center justify-center bg-gray-200 rounded-lg h-64 w-64 text-6xl text-gray-700 hover:bg-gray-300 transition-colors duration-200">
    <div>
      <span class="block text-center">+</span>
      <span class="block text-center text-2xl">Create</span>
    </div>
  </router-link>

  <div v-for="project in projects" :key="project.id">
    <router-link :to="`/project/${project.id}`">
      <button 
        @click="selectProject(project)" 
        class="flex items-center justify-center bg-gray-200 rounded-lg h-64 w-64 text-6xl text-gray-700 hover:bg-gray-300 transition-colors duration-200"
        :style="{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        {{ project.id }}
      </button>
    </router-link>
    <button @click="deleteProject(project)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Delete
    </button>
  </div>

</template>