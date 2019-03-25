<template>
  <div class="app-main">
    <v-header></v-header>
    <div class="personal-wrapper">
      <div class="navbar">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="1">
                <i class="iconfont icon-wode"></i>
                <span slot="title">我的资料</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="iconfont icon-dingdan"></i>
                <span slot="title">我发表的</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="iconfont icon-heart"></i>
                <span slot="title">我喜欢的</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont icon-pingjia"></i>
                <span slot="title">我评论的</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="iconfont icon-faxian"></i>
                <span slot="title">我关注的</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <el-container>
          <el-header>我的资料</el-header>
          <el-main>Main</el-main>
        </el-container>
      </div>
    </div>
  </div>    
</template>
<script>
import header  from "./Header";
export default { 
  data(){
    return {

    }
  },
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus">
@import url('//at.alicdn.com/t/font_1080948_elehiin2qv.css');
  .personal-wrapper
    background-color #fff
    padding-top 95px
    .navbar
      display inline-block
      width 40%
      .tac
        width 45%
        margin-left 45%
        .el-menu
          background-color #fff
          border none
          .el-menu-item
            font-size 15px
            i
              color #ff410f
              margin-right 15px
              font-size 24px
              vertical-align middle
              font-weight bold
            span
              color #4a4a4a
          .el-menu-item:hover
            outline 0
            background-color #eee
            border-radius 8px
          .is-active
            background-color #eee
            border-radius 8px  
    .content
      display inline-block
      vertical-align top
      width 60%
      .el-container
        background-color #fff
        .el-header
          margin-bottom 20px
          font-weight 700
          font-size 14px
          height 25px !important
          line-height 25px
          padding 0
        .el-main
          padding 0
</style>