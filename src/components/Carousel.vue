<template>
  <div class="carousel">
    <el-carousel :interval="3000" type="card" :height="Height">
      <el-carousel-item v-for="item in carousel" :key="item.id">
      <!-- <h3>{{ item }}</h3> -->
      <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
   
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
    padding-top 70px
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
</style>
