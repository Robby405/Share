<template>
  <div class="carousel">
    <el-carousel :interval="3000" type="card" :height="Height">
      <el-carousel-item v-for="item in carousel" :key="item.id">
      <!-- <h3>{{ item }}</h3> -->
      <img :src="item.src" alt="">
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
      carousel: [
        {
          "id": 1,
          "src": "https://picjumbo.com/wp-content/uploads/business-free-photos-download-2210x1473.jpg"
        },
        {
          "id": 2,
          "src": "https://picjumbo.com/wp-content/uploads/gold-plates-wedding-table-settings-and-decorations-close-up_free_stock_photos_picjumbo_DSC06244-2210x1473.jpg"
        },
        {
          "id": 3,
          "src": "https://picjumbo.com/wp-content/uploads/i-love-you-heart-helium-balloon-free-photo-DSC07875-2210x1473.jpg"
        },
        {
          "id": 4,
          "src": "https://picjumbo.com/wp-content/uploads/hamburgers-free-photo-DSC07983-2210x1473.jpg"
        },
        {
          "id": 5,
          "src": "https://picjumbo.com/wp-content/uploads/blueberries-free-photo-2210x1473.jpg"
        },
        {
          "id": 6,
          "src": "https://picjumbo.com/wp-content/uploads/baking-salmon-fillets-2210x1473.jpg"
        },
      ]
    }
  }
}
</script>
<style lang="stylus">
  .carousel
    position relative
    padding-top 75px
    .el-carousel
      .el-carousel__container
        height 350px !important
        .el-carousel__item:nth-child(2n)
          background-color #99a9bf
        .el-carousel__item:nth-child(2n+1)
          background-color #d3dce6
        .el-carousel__item--card
          width 65%
          img
            width 100%
            height 100%
    .second-menu
      position absolute
      top: 0
      left: 5%
      z-index: 8
      width 19%
      max-width 265px
      overflow hidden
      box-shadow 3px 3px 5px #888888
      margin-top 95px
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
