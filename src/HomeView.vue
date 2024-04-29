<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const projects = computed(() => store.state.projects)

const selectProject = (project) => {
  console.log(router);
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
  <h2 class="text-2xl font-bold mb-4">Home View</h2>

  <div class="bg-[#F19763] p-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
    <router-link to="/create" class="flex items-center justify-center bg-[#7D842A] rounded-lg h-64 w-64 text-6xl text-white hover:bg-[#7D842A] transition-colors duration-200">
      <div>
        <span class="block text-center ">+</span>
        <span class="block text-center text-2xl">Create</span>
      </div>
    </router-link>

    <div v-for="project in projects" :key="project.id" class="flex flex-col items-center bg-[#AF3B25] rounded-lg p-4">
      <router-link :to="`/project/${project.id}`">
        <div 
          class="h-64 w-64 lg:w-40 h-40 bg-cover bg-center"
          :style="{ backgroundImage: `url(${project.image})` }"
        ></div>
        <div class="text-3xl text-gray-700 text-center text-white">{{ project.id }}</div>
      </router-link>
      <button @click="deleteProject(project)" class="bg-[#D06F37] hover:bg-[#F19763] text-white font-bold py-1 px-2 rounded mt-2 text-sm">
        Delete
      </button>
    </div>
  </div>

</template>