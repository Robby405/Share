<template>
  <div class="app-main">
    <v-header></v-header>
    <div class="find-wrapper">
      <el-row :gutter="20">  
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="http://qiniu.henduonian.com/lemon/1533803972095_file.jpg" alt="">
            <div class="find-title__wrapper">
              <a href="">图片</a>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="http://qiniu.henduonian.com/lemon/1545812251983_file.jpg" alt="">
            <div class="find-title__wrapper">
              <a href="">文字</a>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="http://qiniu.henduonian.com/lemon/1532071306121_file.png" alt="">
            <div class="find-title__wrapper">
              <a href="">视频</a>
            </div>
          </div>
        </el-col>
      </el-row>
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
.find-wrapper
  width 65%
  margin 0 auto
  padding-top 115px
  min-height 753px
  .grid-content
    position relative 
    img 
      width 100%
    .find-title__wrapper
      width 100%
      height 97%
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
        
</style>