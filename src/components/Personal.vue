<template>
  <div class="app-main">
    <v-header></v-header>
    <div class="personal-wrapper">
      <div class="navbar">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo">
              <el-menu-item index="1">
                <i class="iconfont icon-wode"></i>
                <span slot="title">
                  <router-link to="/personal/profile">我的资料</router-link>
                </span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="iconfont icon-dingdan"></i>
                <span slot="title">
                  <router-link to="/personal/shares">我分享的</router-link>
                  </span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="iconfont icon-heart"></i>
                <span slot="title">
                  <router-link to="/personal/likes">我喜欢的</router-link>
                  </span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="iconfont icon-pingjia"></i>
                <span slot="title">
                  <router-link to="/personal/comments">我评论的</router-link>
                </span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="iconfont icon-faxian"></i>
                <span slot="title">
                  <router-link to="/personal/follows">我关注的</router-link>
                </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <router-view></router-view>
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
    'v-header': header,
  }
}
</script>
<style lang="stylus">
@import url('//at.alicdn.com/t/font_1080948_elehiin2qv.css');
  .personal-wrapper
    background-color #fff
    padding-top 115px
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
              a
                text-decoration none
                color #333
                display inline-block
                width 100%
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
      width 35%
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
          border-top 1px solid #f0f0f0
</style>