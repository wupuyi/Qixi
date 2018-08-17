<template>
  <div class="qixi">
    <div class="first" v-if="!isStart">
      <div class="qixi-title"></div>
      <div class="qixi-subtitle">总有欢喜在心头</div>
      <div class="qixi-startbtn">
        <span @click="_getCard">抽取你的七夕卡片</span>
      </div>
      <div class="first-footer">回忆家小酒屋献上</div>
    </div>
    <div class="card-page" v-else>
      我是要抽取卡片呐
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isStart: false
    }
  },
  methods: {
    _getCard () {
      this.isStart = true
    }
  }
}
</script>

<style lang="scss" scoped>
.qixi {
  width: 100vw;
  height: 100vh;
  .first {
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/qixi_bg_small.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .qixi-title {
      width: 3rem;
      height: .75rem;
      margin: 0 auto;
      position: absolute;
      top: 2.6rem;
      background-image: url(../assets/img/qixi_title.png);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
    }
    .qixi-subtitle {
      font-family:'huxiaobo-gdh13ec0ffa9f1dcf5';
      position: absolute;
      top: 3.5rem;
      font-size: .26rem;
      color: #ffffff;
      width: 100%;
      text-align: center;
    }
    .qixi-startbtn {
      position: absolute;
      top: 4.5rem;
      width: 100%;
      text-align: center;
      font-size: .16rem;
      & > span {
        padding: 15px 10px;
        border: 1px solid #ffffff;
        border-radius: 38px;
        color: #ffffff;
        margin: 0 auto;
      }
    }
    .first-footer {
      width: 100%;
      position: fixed;
      bottom: 20px;
      color: #ffffff;
      font-size: .16rem;
      font-family:'SourceHanSerif-13ec0765991dcf5';
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>
