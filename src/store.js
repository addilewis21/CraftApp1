// store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [],
  },
  mutations: {
    addProject(state, project) {
      state.projects.push(project)
    },
  },
})