import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    projects: [],
    counterAmounts: {},
    timerWithLaps: {},
  },
  mutations: {
    setCounterAmounts(state, { projectId, counterAmounts }) {
      state.counterAmounts[projectId] = counterAmounts
    },
    setTimerWithLaps(state, { projectId, timerWithLaps }) {
      state.timerWithLaps[projectId] = timerWithLaps
    },
    addProject(state, project) {
      state.projects.push(project)
    },
    deleteProject(state, projectId) {
      state.projects = state.projects.filter(project => project.id !== projectId);
    },
  },
  actions: {
    saveCounterAmounts({ commit }, payload) {
      commit('setCounterAmounts', payload)
    },
    saveTimerWithLaps({ commit }, payload) {
      commit('setTimerWithLaps', payload)
    },
    addProject({ commit }, project) {
      commit('addProject', project)
    },
    deleteProject({ commit }, projectId) {
      commit('deleteProject', projectId);
    },
  },
})