<template>
  <div class="card">
    <el-container>
      <el-main>
        <div class="img">
          <img src="https://cdn.dribbble.com/users/59947/screenshots/6133129/shipwreck_island_dribbble.jpg" alt="">
          <!-- <div class="icon">
              <i class="el-icon-circle-plus" @click="dialogVisible = true"></i>
          </div> -->
          <div class="btns">
            <el-button>
              <i class="iconfont icon-heart-fill"></i>
              <span>喜欢</span>
            </el-button>
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
            <i class="iconfont icon-heart-fill"></i>
            <span>888</span>
          </li>
        </ul>
      </el-footer>
    </el-container>
    <h2 class="attribution">
      <a href="" class="hoverable">
        <img src="https://picjumbo.com/wp-content/uploads/woman-on-carousel-swing-ride_free_stock_photos_picjumbo_HNCK8794-2210x1473.jpg" alt="" class="photo">
        <span>Luova Studio</span>
      </a>
    </h2>
    <!-- <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      >
      <span>
        <el-container>
          <el-header>
            <el-row :gutter="10">
              <el-col :span="2">
                <a href="">
                  <img :src="cardInfo.avatar" alt="">
                </a>
              </el-col>
              <el-col :span="16">
                <h1>{{ cardInfo.title }}</h1>
                <h2>{{ cardInfo.info }}</h2>
              </el-col>
              <el-col :span="6">
                <el-button :class="{ isLiked : follow  }" @click="followCncel(cardInfo.id)">
                  <i class="iconfont icon-heart-fill" ></i>
                  关注
                </el-button>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-carousel>
              <el-carousel-item v-for="item in cardInfo.images" :key="item.id">
                <img :src="item.images" alt="图片找不到了"/>
              </el-carousel-item>
            </el-carousel>
          </el-main>
          <el-container>
            <el-main>
              <div class="screenshot-conversation">
                <div class="comments-section">
                  <h2 class="count">
                    11 回答
                  </h2>
                  <div class="comments-sort">
                    <a href="" class="active">以前的</a>
                    <a href="">最新的</a>
                    <a href="">我喜欢</a>
                  </div>
                  <ol class="comments">
                    <li class="comment">
                      <h2>
                        <a href="hoverable">
                          <img src="https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg" alt="">
                          Ris
                        </a>
                        <span class="nudge-right"></span>
                      </h2>
                      <div class="comment-body">
                        <p>wow</p>
                      </div>
                      <span class="comment-meta-likes">
                        <a href="">
                          <i class="iconfont icon-heart-fill"></i>3
                        </a>
                        <span class="hide">  
                        </span>
                      </span>
                      <p class="comment-meta">
                        <a href="" class="posted">about 17 hours ago</a>
                      </p>
                    </li>
                     <li class="comment">
                      <h2>
                        <a href="hoverable">
                          <img src="https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg" alt="">
                          Ris
                        </a>
                        <span class="nudge-right"></span>
                      </h2>
                      <div class="comment-body">
                        <p>wow</p>
                      </div>
                      <span class="comment-meta-likes">
                        <a href="">
                          <i class="iconfont icon-heart-fill"></i>3
                        </a>
                        <span class="hide">  
                        </span>
                      </span>
                      <p class="comment-meta">
                        <a href="" class="posted">about 17 hours ago</a>
                      </p>
                    </li>
                     <li class="comment">
                      <h2>
                        <a href="hoverable">
                          <img src="https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg" alt="">
                          Ris
                        </a>
                        <span class="nudge-right"></span>
                      </h2>
                      <div class="comment-body">
                        <p>wow</p>
                      </div>
                      <span class="comment-meta-likes">
                        <a href="">
                          <i class="iconfont icon-heart-fill"></i>3
                        </a>
                        <span class="hide">  
                        </span>
                      </span>
                      <p class="comment-meta">
                        <a href="" class="posted">about 17 hours ago</a>
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
              <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
              <div class="writeComment">
                <textarea placeholder="请写下你的评论..."></textarea>
                <el-button type="primary" size="mini" round>发表</el-button>
              </div>
            </el-main>
            <el-aside>
              <div class="screenshot-meta">
                <div class="shot-good"></div>
              </div>
            </el-aside>
          </el-container>
        </el-container>  
      </span>
    </el-dialog> -->

  </div>
    
</template>
<script>
export default {
  data(){
    return {
      dialogVisible: false,
    }
  },
  methods: {
    
  },
}
</script>
<style lang="stylus">
@import url('//at.alicdn.com/t/font_1080948_lmezl2ohfk.css');
.card
  .el-container
    background-color #eee
    padding-bottom 10px
    .el-container:hover .btns
      display block
    .el-main
      padding 10px
      overflow hidden
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
      .btns
        display none
        position absolute
        bottom 8%
        right 4%
        .el-button
          color #757575
          font-size 13px
          padding 4px 10px
          &:hover
            color #666
            background-color #fff
            border 1px solid #dcdfe6
          span span
            margin-left 2px
            vertical-align bottom
    .el-footer
      height 12px !important
      padding 0 10px
      ul li
        float right
        list-style none
        color #666
        font-size 11px
        margin-left 11px
        .iconfont
          font-size 11px
        i
          margin-right 3px
          color #ff410f
        span
          vertical-align middle
  .attribution
    font-size 13px !important
    margin-top 10px
    padding-left 10px
    a
      display inline
      font-weight 500
      text-decoration none
      color #666
      &:hover
        text-decoration none
      img
        float left
        width 16px
        height 16px
        margin 1px 5px 0 0
        border-radius 50%
  >.el-dialog__wrapper
    background-color rgba(0,0,0,.6)
    .el-dialog
      max-width 800px
      min-width 620px
      border-radius 10px
      .el-dialog__header
        padding 0
        top 15px
        height 30px
      .el-dialog__body
        padding: 0 20px 30px
        .el-container
          background-color #fff
          padding-bottom 0
        .el-header
          height auto !important
          .el-col
            margin-bottom 0 !important
          .el-col-2
            img
              width 48px 
              height 48px
              border-radius 50%
          .el-col-16
            h1
              margin 0 0 4px
              padding 0
              color #444
              font-size 20px
              font-weight 500
              line-height 1.2
            h2
              font-size 14px
              line-height 1.3
              font-weight normal
              color #999
          .el-col-6
            .el-button.isLiked
              color #ff410f
              border-color #ff410f
              background-color rgba(255, 65, 15, .1)
            .el-button:hover
              color #ff410f !important
              border-color #ff410f !important
              background-color rgba(255, 65, 15, .1) !important 
        .el-main
          padding 0
          .el-carousel__container
            height 500px
            .el-carousel__item h3 
              color #475669
              font-size 14px
              opacity 0.75
              line-height 150px
              margin 0
            .el-carousel__item:nth-child(2n) 
              background-color #99a9bf      
            .el-carousel__item:nth-child(2n+1)
              background-color #d3dce6
          .el-carousel__indicators
            li
              border-top none
        .el-container
          margin-top 30px
          .el-main
            .screenshot-conversation
              marigin-right 50px
              .comments-section
                position relative
                margin-bottom 20px
                h2
                  border-bottom none
                  line-height 1.3
                  margin 0 0 15px 0
                  padding 0
                  font-size 16px
                  font-weight 600
                  color #444
                .comments-sort
                  position absolute
                  top 3px
                  right 0
                  font-size 13px
                  a
                    font-weight 500
                    color #bbbbbb
                    margin 0 0 0 8px
                    text-decoration none
                  .active
                    color #757575
                ol
                  list-style none
                  >li
                    float none
                    margin 0 0 20px 0
                    padding 0
                    font-size 15px
                    line-height 1.4em
                    color #555
                    border-bottom 1px solid #ddd
                    border-top none
                    h2
                      margin  0 0 2px 0
                      font-size 16px
                      font-weight 500
                      a
                        font-weight 700
                        color #444
                        text-decoration none
                        img
                          float left
                          width 32px
                          height 32px
                          margin 3px 10px 0 0
                          border-radius 50%
                    .comment-body
                      width 80%
                      margin 0 0 0 42px
                      overflow hidden
                      p
                        margin 0 0 10px 0
                        padding 0
                    .comment-meta-likes
                      white-space nowrap
                      font-size 12px
                      line-height 1
                      a
                        float right
                        text-decoration none
                        font-weight normal
                        color #aaa
                        padding-left 15px
                        &:hover
                          color #666
                    .comment-meta
                      margin 0 0 20px 42px
                      font-size 13px
                      line-height 1
                      color #ccc
                      a
                        text-decoration none
                        color #999
                        &:hover
                          color #666
            .el-pagination
              text-align center
              >ul>li
                padding 0  
            .writeComment
              display flex
              margin-top 15px
              >textarea
                width 75%
                line-height 28px
                height 28px
                border-color #909090
                border-radius 15px
                padding-left 10px
                flex 1
                &:focus
                  outline none
              >.el-button
                margin-left 10px
                width auto
          .el-aside
            width 40%
</style>
