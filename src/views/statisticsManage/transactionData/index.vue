<template>
  <div>
    <ul class="row">
      <li span="6" class="row-col">
        <div class="title">销售单总数</div>
        <div class="num">{{item.orderNum}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">销售总金额</div>
        <div class="num">￥{{item.saleAmount}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">销售成本金额</div>
        <div class="num">￥{{item.costAmount}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">销售利润金额</div>
        <div class="num">￥{{item.profitAmount}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">损耗金额</div>
        <div class="num">￥{{item.wastageAmount}}</div>
      </li>
    </ul>
    <ul class="row">
      <li span="6" class="row-col">
        <div class="title">有效订单数</div>
        <div class="num">{{item.effectiveNum}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">有效订单金额</div>
        <div class="num">￥{{item.effectiveAmount}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">未结算金额</div>
        <div class="num">￥{{item.unSettleAmount}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">已结算金额</div>
        <div class="num">￥{{item.settleAmount}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">无效订单金额</div>
        <div class="num">￥{{item.cancelAmount}}</div>
      </li>
    </ul>
    <ul class="row">
      <li span="6" class="row-col">
        <div class="title">成交订单数</div>
        <div class="num">{{item.dealNum}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">取消订单数</div>
        <div class="num">{{item.cancelNum}}</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">成交率</div>
        <div class="num">{{item.dealRate}}%</div>
      </li>
      <li span="6" class="row-col">
        <div class="title">取消率</div>
        <div class="num">{{item.cancelRate}}%</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageApi: {
          startTime: '',
          endTime: ''
        },
        item: {}
      }
    },
    methods: {
      getList() {
        this.$http.post(this.$api.summaryStatistics, this.pageApi).then(res => {
          if (res.code === 1000) {
            this.item = Object.assign({}, res.data);
          }
        })
      }
    },
    created() {
      this.getList();
    }
  }
</script>

<style scoped>
  .row {
    margin-top: 20px;
    background: #fff;
  }
  
  .row-col {
    position: relative;
    font-size: 32px;
    height: 100px;
    line-height: 100px;
    color: #666;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 40px;
  }
  .row-col .num{
    position: absolute;
    top: 0;
    right: 40px;
  }
  .row-col:last-child::after {
    display: none;
  }
  
  .row-col::after {
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
</style>