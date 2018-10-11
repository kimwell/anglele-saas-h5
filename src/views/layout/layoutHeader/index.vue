<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-main">
        <div class="back" v-if="isBack" @click="goBack">
          <a class="iconfont icon-fanhui"></a>返回
        </div>
        <h1 class="title">{{title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    watch: {
      '$route' (val) {
        if (val.name !== 'home') {
          this.title = val.meta.title
        } else {
          this.title = this.businessName.extraInfo.businessName
        }
      },
      businessName(val) {
        if (this.$route.name === 'home') this.title = this.businessName.extraInfo.businessName
      }
    },
    computed: {
      businessName() {
        return this.$store.state.user
      },
      isBack() {
        return this.$route.meta.isBack
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 128px;
  }
  
  .header-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 128px;
    background: linear-gradient(90deg, rgba(72, 207, 207, 1) 1%, rgba(22, 214, 186, 1) 100%);
    color: #fff;
    z-index: 9999;
  }
  .header-inner .back {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 88px;
    line-height: 88px;
    margin: 0 30px;
    font-size: 28px;
  }
  .header-inner .back a {
    display: block;
    font-size: 36px;
  }
  .header-main {
    position: relative;
    top: 40px;
    height: 88px;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
  .title {
    position: absolute;
    top: 0;
    left: 50%;
    height: 88px;
    line-height: 88px;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 36px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
</style>