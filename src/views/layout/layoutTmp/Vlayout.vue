<template>
  <div>
    <layoutHeader/>
    <router-view/>
    <layoutFooter/>
  </div>
</template>

<script>
  import layoutHeader from '../layoutHeader/index'
  import layoutFooter from '../layoutFooter/index'
  export default {
    components: {
      layoutHeader,
      layoutFooter
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  
</style>