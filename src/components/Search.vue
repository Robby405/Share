<template>
  <div class="search-wrapper">
    <v-header></v-header>
    <div class="search-result">
      <h2>搜索结果</h2>
      <ul>
        <li v-for="item in lists" :key="item.id">
          <div class="content">
            <a href="" class="title">{{item.title}}</a>
            <p class="desc">{{item.desc}}</p>
            <div class="tag">
              <div class="tag-label">标签：</div>
              <div class="tag-item" v-for="tag in item.tags" :key="tag">{{tag}}</div>
            </div>
          </div>
          <div class="img-wrapper">
            <img :src="item.src" alt="">
          </div>
        </li>
      </ul>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import header from './Header'
import footer from './Footer'
export default {
  components: {
    'v-header': header,
    'v-footer': footer
  },
  data(){
    return {
      lists: [{
        id: 0,
        src: 'https://www.artic.edu/iiif/2/9ee6ba5d-97ee-8012-2ee5-7b540a048023/full/400,/0/default.jpg',
        title: 'PickPik',
        desc: '基于AI筛选的无版权图库基于AI筛选的无版权图库基于AI筛选的无版权图库基于AI筛选的无版权图库基于AI筛选的无版权图库',
        tags: ['旅游','生活']
      },{
        id: 1,
        src: 'http://qiniu.henduonian.com/lemon/1551232337042_file.jpg',
        title: 'New Old Stock',
        desc: '复古图片收藏馆',
        tags: ['美妆','生活','购物']
      }]
    }
  }
}
</script>
<style lang="stylus">
  .search-wrapper
    max-width 1440px
    height 100%
    margin 0 auto
    background-color #fff
    .search-result
      padding-top 100px
      width 60%
      min-height 768px
      margin 0 auto
      h2
        text-align center
        font-size 30px
        font-weight 500
      ul
        padding 10px
        >li
          list-style none
          padding 15px 0
          border-bottom 1px solid #f0f0f0
          .content
            display inline-block
            width 65%
            margin-right 10%
            .title
              margin -7px 0 4px
              font-size 18px
              font-weight 700
              color #333
              text-decoration none
              &:hover
                text-decoration underline
            .desc
              margin 5px 0 8px
              font-size 15px
              line-height 24px
              color #999
            .tag
              display flex
              align-items center
              align-content center
              flex-wrap wrap
              font-size 14px
              color #6b798c
              margin-top 10px
              .tag-item
                padding 2px 4px
                transition all .3s ease
                &:hover
                  color #ff410f
        .img-wrapper
          display inline-block
          vertical-align top
          width 25%
          >img
            width 100%
            max-height 100px
            border-radius 4px
</style>
