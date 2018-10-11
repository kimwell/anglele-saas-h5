<template>
  <div class="header">
    <div class="header-inner"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .header{
    height: 128px;
  }
  .header-inner{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 128px;
    background:linear-gradient(90deg,rgba(72,207,207,1) 1%,rgba(22,214,186,1) 100%);
    color: #fff;
    z-index: 9999;
  }
</style>