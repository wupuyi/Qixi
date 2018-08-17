<template>
  <div class="qixi">
    <div class="first" v-if="!isStart">
      <div class="qixi-title"></div>
      <div class="qixi-subtitle">总有欢喜在心头</div>
      <div class="qixi-startbtn">
        <span @click="_getCard">抽取你的七夕专属</span>
      </div>
      <div class="first-footer">回忆家小酒屋献上</div>
    </div>
    <div class="card" v-else>
       <div class="poetry">
         <p class="poetry-content" v-html="card[index].content">
           {{ card[index].content }}
          </p>
         <p class="poetry-info">
           (出自 {{ card[index].author }} 《{{ card[index].title }}》)
         </p>
       </div>
       <img :src="card[index].music" class="qrcode" alt="二维码">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isStart: false,
      index: 0,
      card: [
        {
          author: '秦观',
          content: '金风玉露一相逢<br/>便胜却人间无数',
          title: '鹊桥仙·纤云弄巧',
          music: './static/img/honeyhoney.png'
        },
        {
          author: '杜牧',
          content: '天阶夜色凉如水<br/>卧看牵牛织女星',
          title: '秋夕',
          music: './static/img/xingyue.png'
        },
        {
          author: '林杰',
          content: '七夕今宵看碧霄<br/>牵牛织女渡河桥',
          title: '乞巧',
          music: './static/img/sancuntiantang.png'
        },
        {
          author: '德容',
          content: '玉露金风报素秋<br/>穿针楼上独含愁',
          title: '七夕二首·其一',
          music: './static/img/jinfengyulu.png'
        },
        {
          author: '秦观',
          content: '两情若是久长时<br/>又岂在朝朝暮暮',
          title: '鹊桥仙·纤云弄巧',
          music: './static/img/shanyoumuxi.png'
        },
        {
          author: '陈师道',
          content: '东飞乌鹊西飞燕<br/>盈盈一水经年见',
          title: '菩萨蛮·七夕',
          music: './static/img/shiguangbimo.png'
        },
        {
          author: '柳永',
          content: '愿天上人间<br/>占得欢娱，年年今夜',
          title: '二郎神',
          music: './static/img/jiuer.png'
        }
      ]
    }
  },
  methods: {
    _getCard () {
      this.isStart = true
      this.index = this._getRandomNum(0, 6)
    },
    _getRandomNum (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style lang="scss" scoped>
.qixi {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(../assets/img/qixi_bg_small.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .first {
    width: 100%;
    height: 100%;
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
  .card {
    width: 3rem;
    height: 4rem;
    background-color: rgba($color: #ffffff, $alpha: .8);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2rem;
    margin-left: -1.5rem;
    box-sizing: border-box;
    padding: 50px 15px;
    p {
      margin: 0;
    }
    .poetry {
      .poetry-content {
        font-size: .26rem;
        text-align: center;
        font-family:'CTBiaoSongSJ13ec64a8c81dcf5';
      }
      .poetry-info {
        margin-top: 10px;
        font-size: .12rem;
        text-align: center;
      }
    }
    .qrcode {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      margin: 50px auto;
    }
  }
}
</style>
