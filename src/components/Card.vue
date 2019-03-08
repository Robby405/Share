<template>
  <el-container>
    <el-main>
      <div class="img">
        <img src="https://cdn.dribbble.com/users/59947/screenshots/6133129/shipwreck_island_dribbble.jpg" alt="">
        <div class="icon">
          <i class="el-icon-circle-plus"></i>
        </div>
      </div>  
    </el-main>
    <el-footer>
      <ul>
        <li>
          <i class="el-icon-edit-outline"></i>
          <span>999</span>
        </li>
        <li>
          <i class="el-icon-star-on"></i>
          <span>888</span>
        </li>
      </ul>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
}
</script>
<style lang="stylus">
  .el-container
    background-color #eee
    padding-bottom 10px
    .el-main
      padding 10px
      .img
        position relative
        width 100%
        img 
          width 100%
          max-height 160px
      .icon
        position absolute
        left 96%;
        top -6%
        font-size 19px
        color #ff410f
        opacity 0.8
    .el-footer
      height 12px !important
      padding 0 10px
      ul li
        float right
        list-style none
        color #666
        font-size 11px
        margin-left 11px
        .el-icon-edit-outline,
        .el-icon-star-on
          margin-right 3px
          color #ff410f
        span
          vertical-align top
</style>
