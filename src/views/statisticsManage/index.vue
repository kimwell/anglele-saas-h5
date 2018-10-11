<template>
  <div>
    <ul class="table-view">
      <li class="table-view-cell" @click="goRoute('transactionData')">
        <span class="iconfont icon1 cell-icon icon-jiaoyi"></span>
        <span>交易汇总</span>
        <span class="iconfont arrow icon-jiantou"></span>
      </li>
      <li class="table-view-cell">
        <span class="iconfont icon2 cell-icon icon-kucunchaxun"></span>
        <span>库存报表</span>
        <span class="iconfont arrow icon-jiantou"></span>
      </li>
      <li class="table-view-cell">
        <span class="iconfont icon3 cell-icon icon-xiaoshoubaobiao"></span>
        <span>销售报表</span>
        <span class="iconfont arrow icon-jiantou"></span>
      </li>
      <li class="table-view-cell">
        <span class="iconfont icon4 cell-icon icon-lirun2"></span>
        <span>利润报表</span>
        <span class="iconfont arrow icon-jiantou"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goRoute(data){
        this.$router.push({name: data})
      }
    }
  }
</script>

<style scoped>
  .table-view {
    margin-top: 20px;
    background: #fff;
  }
  
  .table-view .table-view-cell {
    position: relative;
    font-size: 32px;
    height: 100px;
    line-height: 100px;
    color: #333;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 40px;
  }
  .table-view .table-view-cell:last-child::after{
    display: none;
  }
  .table-view .table-view-cell::after {
    position: absolute;
    right: 40px;
    bottom: 0;
    left: 40px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
  .table-view .table-view-cell .arrow{
    position: absolute;
    top: 0;
    right: 40px;
    font-size: 50px;
    color: #666;
  }
  .cell-icon{
    display: inline-block;
    font-size: 32px;
    margin-right: 20px;
  }
  .icon1{
    color: #48CFCF;
  }
  .icon2{
    color: #FFA53B;
  }
  .icon3{
    color: #19B0FF;
  }
  .icon4{
    color: #FF5959;
  }
</style>