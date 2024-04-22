import { reactive, provide } from 'vue'

export const state = reactive({
  link: '',
  image: '',
  projectName: '',
  craftType: '',
})

export function provideState() {
  // use Vue's provide function to provide the state
  provide('state', state);
}