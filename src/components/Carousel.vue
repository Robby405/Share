<template>
  <div class="carousel">
    <el-carousel :interval="3000" type="card" :height="Height" :autoplay="play">
      <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row class="second-menu">
      <el-col :span="24">	
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo">
          <a>推荐</a>
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">导航五</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="9">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return{
      Height: '300px',
      play: false
    }
  }
}
</script>
<style lang="stylus">
  .carousel
    position relative
    padding-top 95px
    .el-carousel
      .el-carousel__item h3
        color #475669
        font-size 14px
        opacity 0.75
        line-height 300px
        margin 0
      .el-carousel__item:nth-child(2n)
        background-color #99a9bf
      .el-carousel__item:nth-child(2n+1)
        background-color #d3dce6
      .el-carousel__item--card
        width 60%
    .second-menu
      position absolute
      top: 0
      left: 3%
      z-index: 8
      width 265px
      overflow hidden
      padding-top 95px
      a
        display block 
        height 32px
        line-height 32px
        font-size 14px
        font-weight bold
        letter-spacing 2px 
        margin 0 27px
        padding-top: 20px
        border-bottom 3px solid #000
</style>
