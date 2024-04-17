<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/Create')
    },
  },
}
</script>

<template>
  <h2>Home View</h2>
  <button @click="goToAbout">Go to Create</button>
  
</template>