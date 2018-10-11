<template>
  <div class="tab-bar">
    <div class="tab-bar-inner">
      <router-link v-for="(item,index) in navData" :key="index" :to="item.route">
        <span>{{item.icon}}</span>
        <span class="name">{{item.name}}</span>
      </router-link>
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
            name: 'home'
          }
        }, {
          name: '统计',
          icon: '',
          route: {
            name: 'statisticsManage'
          }
        }, {
          name: '我的',
          icon: '',
          route: {
            name: 'userManage'
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
  
  .tab-bar a.router-link-active .name {
    color: #23D5C0;
  }
  
  .name {
    display: block;
    color: #333;
    font-size: 26px;
  }
</style>