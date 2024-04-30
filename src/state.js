import { reactive, provide } from 'vue'

export const state = reactive({
  link: '',
  image: '',
  projectName: '',
  craftType: '',
})

export function provideState() {
  provide('state', state);
}