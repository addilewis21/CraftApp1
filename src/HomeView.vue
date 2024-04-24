<script>
import { ref } from 'vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ProjectView from './ProjectView.vue'


export default {
  setup() {
    const store = useStore()
    const projects = computed(() => store.state.projects)
    const router = useRouter()

    const selectProject = (project) => {
      router.push({ name: 'ProjectView', params: project })
    }

    return { projects, selectProject }
  },
}
</script>

<template>
  <h2>Home View</h2>
  
  <div v-for="project in projects" :key="project.id" @click="selectProject(project)">

  </div>

</template>