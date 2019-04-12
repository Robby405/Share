<template>
  <div>
    <el-container>
      <el-header>我喜欢的</el-header>
      <el-main>
        <ul class="card-wrapper">
          <li v-for="item in lists" :key="item.id">
            <div class="card-left">
              <img :src="item.src" alt="">
            </div>
            <div class="card-right">
              <div class="card-right__title">
                <a href="card-right__title-link" >{{item.title}}</a>
              </div>
              <div class="card-right__desc">{{item.desc}}</div>
              <div class="card-right__tag">
                <div class="card-right__tag-label">标签：</div>
                <div class="card-right__tag-item" v-for="tag in item.tags" :key="tag">{{tag}}</div>
              </div>
            </div>
          </li>
        </ul>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      lists: [{
        id: 0,
        src: 'http://qiniu.henduonian.com/lemon/1552480788493_file.jpg',
        title: 'PickPik',
        desc: '基于AI筛选的无版权图库',
        tags: ['无版权','免费图片']
      },{
        id: 1,
        src: 'http://qiniu.henduonian.com/lemon/1551232337042_file.jpg',
        title: 'New Old Stock',
        desc: '复古图片收藏馆',
        tags: ['复古','复古图片','怀旧图片']
      }]
    }
  }
}
</script>
<style lang="stylus">
.card-wrapper
  >li
    display flex
    padding 20px
    border-top 1px solid #f0f0f0
    cursor pointer
    transition all .3s ease
    .card-left
      flex 1
      >img
        width 200px
        height 94px
        border-radius 4px
    .card-right
      flex 3
      margin-left 20px
      .card-right__title
        font-size 18px
        color #333
        line-height 1
        >a
          text-decoration none
          color #333
          transition all .3s ease
          &:hover
            color #ff410f
      .card-right__desc
        font-size 14px
        margin-top 10px
        max-height 40px
        overflow hidden
      .card-right__tag
        display flex
        align-items center
        align-content center
        flex-wrap wrap
        font-size 14px
        color #6b798c
        margin-top 10px
        .card-right__tag-item
          padding 2px 4px
          transition all .3s ease
          &:hover
            color #ff410f
</style>
