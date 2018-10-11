<template>
  <div>
    <layoutHeader/>
    <router-view/>
    <layoutFooter :isShow="isTabBar"/>
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
    watch: {
      '$route' (val) {
        if(val.name === 'home'){
          document.getElementsByTagName('body')[0].className = 'index'
        }else{
          document.getElementsByTagName('body')[0].className = ''
        }
      }
    },
    computed:{
      isTabBar(){
        return this.$route.meta.tabBar
      }
    },
    methods: {}
  }
</script>

<style scoped>
  
</style>