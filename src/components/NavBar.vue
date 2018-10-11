<template>
  <div class="tab-bar">
    <div class="tab-bar-inner">
      <a v-for="(item,index) in navData">
        <span>{{item.icon}}</span>
        <span class="name">{{item.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navData: [{
          name: '首页',
          icon: '',
          route: {
            name: 'index'
          }
        }, {
          name: '统计',
          icon: '',
          route: {
            name: 'index'
          }
        }, {
          name: '我的',
          icon: '',
          route: {
            name: 'index'
          }
        }]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .tab-bar {
    height: 96px;
  }
  
  .tab-bar-inner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding-top: 12px;
    height: 96px;
    z-index: 9999;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  
  .tab-bar a {
    display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
  }
  
  .name {
    display: block;
    color: #333;
    font-size: 26px;
  }
</style>