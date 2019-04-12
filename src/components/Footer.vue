<template>
  <footer class="footer">    
    <el-row >
      <el-col :span="4">
        <div class="copyRight">
          © 2019 Share
        </div>
      </el-col>
      <el-col :span="12">
        <div class="logo">
          Share
        </div>
      </el-col>
      <el-col :span="8">
        <div class="navbar">
          <div class="links">
            <div class="tab-item">
              <router-link to="/">首页</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/find">发现</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/personal/profile">个人中心</router-link>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>

<style lang="stylus">
.footer
  margin-top 30px
  border-top 1px solid #f0f0f0
  .el-row
    width 85%
    height 70px
    line-height 70px
    margin 0 auto
    .copyRight
      margin-left 8%
      font-size 13px
    .logo
      text-align center
      font-family fantasy
      font-size 30px
      padding-left 20%
    .navbar
      .links
        .tab-item
          display inline-block
          >a
            color #4a4a4a
            text-decoration none
            padding 0 20px
            &:hover
              color #ff410f
</style>
