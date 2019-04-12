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
                <span slot="title">
                  <router-link to="/personal/profile"><i class="iconfont icon-wode"></i>个人资料</router-link>
                </span>
              </el-menu-item>
              <el-menu-item index="2">                
                <span slot="title">
                  <router-link to="/personal/shares"><i class="iconfont icon-dingdan"></i>分享</router-link>
                  </span>
              </el-menu-item>
              <el-menu-item index="3">               
                <span slot="title">
                  <router-link to="/personal/likes"><i class="iconfont icon-heart"></i>喜欢</router-link>
                  </span>
              </el-menu-item>
              <el-menu-item index="4">   
                <span slot="title">
                  <router-link to="/personal/comments">
                    <i class="iconfont icon-pingjia"></i>
                    评论
                  </router-link>
                </span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">
                  <router-link to="/personal/follows"><i class="iconfont icon-faxian"></i>我关注的</router-link>
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
    <v-footer></v-footer>
  </div>    
</template>
<script>
import header  from "./Header";
import footer from './Footer'
export default { 
  data(){
    return {

    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>
<style lang="stylus">
@import url('//at.alicdn.com/t/font_1080948_elehiin2qv.css');
  .personal-wrapper
    background-color #fff
    padding-top 115px
    min-height 753px
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
                vertical-align top
                width 100%
                height 100%
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
      width 40%
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