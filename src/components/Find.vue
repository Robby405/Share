<template>
  <div class="app-main">
    <v-header></v-header>
    <div class="find-wrapper">
      <el-row :gutter="20" class="find-navbar">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="http://qiniu.henduonian.com/lemon/1533803972095_file.jpg" alt="">
            <div class="find-title__wrapper">
              <a href="#txt">文字</a>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="http://qiniu.henduonian.com/lemon/1545812251983_file.jpg" alt="">
            <div class="find-title__wrapper">
              <a href="#pic">图片</a>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="http://qiniu.henduonian.com/lemon/1532071306121_file.png" alt="">
            <div class="find-title__wrapper">
              <a href="#video">视频</a>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="find-container">
        <h2 id="txt">用文字感受生活</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in text" :key="item.id">
            <div class="txt-item">
              <a href="#">{{ item.title }}</a>
              <p>{{ item.txt }}</p>
            </div>
          </el-col>
        </el-row> 
        <h2 id="pic">用图片记录生活</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in pics" :key="item.id">
            <div class="pic-item">
              <a href="#">
                <img :src="item.image" alt="">
              </a>
            </div>
          </el-col>
        </el-row>
        <h2 id="video">用视频展示生活</h2>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="video-item">
              <video >
                <source src="https://youtu.be/xU8ut5kyQLk">
              </video>
              <p>
                <i class="iconfont icon-play-circle-fill"></i>
              </p>
            </div> 
          </el-col>
        </el-row>
      </div>
    </div>
    <v-footer></v-footer>
  </div>    
</template>
<script>
import header  from "./Header";
import footer from './Footer';
import axios from 'axios';
// eslint-disable-next-line
/* eslint-disable */ 
export default { 
  data(){
    return {
      pics: [{
        image: 'https://negativespace.co/wp-content/uploads/2019/04/negative-space-business-flatlay-in-india-1062x708.jpg',
        type: 'pic',
      },{
        image: 'https://negativespace.co/wp-content/uploads/2019/04/negative-space-busy-streets-of-shanghai-china-472x708.jpg',
        type: 'pic',
      },{
        image: 'https://negativespace.co/wp-content/uploads/2019/04/negative-space-bird-orange-mountain-sunset-water-944x708.jpg',
        type: 'pic'
      },{
        image: 'https://negativespace.co/wp-content/uploads/2019/02/negative-space-cat-wearing-bow-1062x708.jpg',
        type: 'pic'
      }],
      text: [{
        txt: '你要相信世界上一定有个你的爱人，无论你此刻正被光芒环绕被掌声淹没，还是当时你正孤独地走在寒冷的街道上被大雨淋湿。无论是飘着小雪的清晨，还是被热浪炙烤的黄昏。他一定会穿越这个世界上汹涌着的人群，他一一的走过他们，走向你。他一定会怀着满腔的热血和目光里沉甸甸的爱，走到你的身边抓紧你，他会迫不及待地走到你的身边 ，如果他年轻 那他一定会像顽劣的孩童霸占着自己的玩具不肯与人分享般地拥抱你，如果他已经不再年轻，那他一定会像披荆斩棘归来的猎人 在你身旁燃起篝火，然后拥抱着你疲惫而放心地睡去。他一定会找到你，你要等。',
        title: '周崇光'
      },{
        txt: '爱情里最棒的心态就是：我的一切付出都是一场心甘情愿，我对此绝口不提。你若投桃报李，我会十分感激。你若无动于衷，我也不灰心丧气。直到有一天我不愿再这般爱你，那就让我们一别两宽，各生欢喜。',
        title: '《姗姗》热评'
      },{
        txt: '我不知道什么叫爱情。我只知道，如果那张面庞没有使你感觉到一种甜蜜的惆怅，一种依恋的哀怨，那你肯定没有爱。',
        title: '人与永恒'
      },{
        txt: '“江畔何人初见月？江月何年初照人？”这江边上，是谁第一个看到了月亮？这月亮，又是什么时候开始照耀江边的人？两个叩问里，有人与宇宙，有时间与空间，有物与我……',
        title: '春江花月夜'
      },]
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  mounted: function(){
    var url = "http://localhost:3000"
    axios.get(url+'/find')
    .then(function (reponse){
      // eslint-disable-line no-console
      // Console.log('sucess');
    })
    .catch(function(err){
      // Console.log('err');
    });
  }
}
</script>
<style lang="stylus">
@import url('//at.alicdn.com/t/font_1080948_c1336oo0x77.css');
.find-wrapper
  width 65%
  margin 0 auto
  padding-top 115px
  min-height 753px
  .find-navbar
    .grid-content
      position relative
      img 
        width 100%
        border-radius 4px
      .find-title__wrapper
        width 100%
        height 97%
        border-radius 4px
        position absolute
        top 0
        left 0
        z-index 1
        background-color rgba(0,0,0,0.48)
        a
          position absolute
          top 35%
          color #fff
          font-weight 600
          font-size 22px
          letter-spacing 2px
          width 100%
          text-align center
          display inline-block
          transition 0.2s
          &:hover
            top: 32%
            font-size 25px
  .find-container
    margin-top 30px
    h2
      text-align center
      margin 30px 0
      font-weight 500
      font-size 30px
    .el-row .pic-item
      height 200px
      margin-top 20px
      overflow hidden
      border-radius 4px
      img
        width 100%
        transition 0.3s
      img:hover
        transform scale(1.1)
    .el-row .txt-item
      margin-top 20px
      border-bottom 1px dashed #f0f0f0
      border-radius 4px
      padding 15px
      a
        font-weight 700
        font-size 18px
        color #4a4a4a
        text-decoration none
        text-align center
        &:hover
          text-decoration underline
      p
        margin-top 10px
        font-size 15px
        color #9e9e9e
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 4
        -webkit-box-orient: block-axis
        overflow hidden
        transition .2s
        &:hover
          color #666
    .el-row .video-item
      background-color rgba(0,0,0,.8)
      position relative
      p
        position absolute
        top 32%
        left 43%
        text-align center
        .iconfont
          font-size 40px
          color #fff
</style>