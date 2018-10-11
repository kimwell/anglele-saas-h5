<template>
  <div class="layout">
    <div class="layout-index">
      <div class="index-main">
        <div class="index-main-box1"></div>
        <div class="index-main-box2"></div>
        <ul class="data-cell">
          <li class="data-cell-list">
            <div class="icon">
              <img src="../../assets/images/index-img1.png">
            </div>
            <div class="num">￥{{item.amount !='' ? item.amount : 0}}</div>
            <div class="name">下单总金额</div>
          </li>
          <li class="data-cell-list">
            <div class="icon">
              <img src="../../assets/images/index-img2.png">
            </div>
            <div class="num">￥{{item.totalAmount != '' ? item.totalAmount : 0}}</div>
            <div class="name">有效下单总金额</div>
          </li>
        </ul>
        <ul class="data-cell last">
          <li class="data-cell-list">
            <div class="icon">
              <img src="../../assets/images/index-img3.png">
            </div>
            <div class="num">{{item.customerNum}}</div>
            <div class="name">下单客户数</div>
          </li>
          <li class="data-cell-list">
            <div class="icon">
              <img src="../../assets/images/index-img4.png">
            </div>
            <div class="num">{{item.orderNum}}</div>
            <div class="name">下单总数</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from "@/store/types";
  export default {
    data() {
      return {
        item: {}
      };
    },
    computed: {
      token() {
        return this.$route.query.token;
      },
      hasToken() {
        return this.$store.state.authorization
      }
    },
    methods: {
      setToken(data) {
        this.$store.commit(types.LOGIN, data);
      },
      getData() {
        this.$http.post(this.$api.todayOrderSummary).then(res => {
          if (res.code === 1000) {
            this.item = Object.assign({}, res.data)
          }
        })
      },
      getUser(){
        this.$http.post(this.$api.findCurrentUser).then(res => {
          if (res.code === 1000) {
            this.$store.commit(types.SET_USER_INFO, res.data);
          }
        })
      }
    },
    created() {
      if (!this.hasToken) {
        this.setToken({
          authorization: this.token,
        });
      }
      this.getData();
      this.getUser();
    }
  };
</script>

<style scoped>
  .layout-index {
    padding: 100px 40px 0;
  }
  
  .index-main {
    position: relative;
    background-color: #fff;
  }
  .index-main .index-main-box1{
    position: absolute;
    width: 90%;
    left: 5%;
    height: 100%;
    margin-top: -36px;
    background-color: rgba(255, 255, 255, .3)
  }
  .index-main .index-main-box2{
    position: absolute;
    width: 80%;
    left: 10%;
    height: 100%;
    margin-top: -72px;
    background-color: rgba(255, 255, 255, .2)
  }
  .index-main img {
    width: 138px;
    height: 120px;
  }
  
  .data-cell {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  
  .data-cell .data-cell-list {
    position: relative;
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 90px 0;
    text-align: center;
    border-bottom: 1px solid #47CFCF;
    border-right: 1px solid #47CFCF;
  }
  
  .data-cell .data-cell-list:last-child {
    border-right: 0;
  }
  
  .data-cell.last .data-cell-list {
    border-bottom: 0;
  }
  
  .data-cell .data-cell-list .num {
    font-size: 30px;
    color: #333;
    padding: 40px 0;
  }
  
  .data-cell .data-cell-list .name {
    font-size: 26px;
    color: #666;
  }
</style>