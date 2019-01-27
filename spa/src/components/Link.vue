<template>
  <router-link class="link" :to="to">{{ label }}</router-link>
</template>

<style>
</style>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/'
    },
    label: {
      type: String,
      default: ''
    }
  }    
}
</script>
