<template>
  <div>
    <el-container>
      <el-header>评论</el-header>
      <el-main>
        <ul class="el-main-wrapper">
          <li v-for = " item in lists " :key = "item.Id">
            <img :src="item.src" alt="没有头像" class="avatar">
            <div class="right-cont">
              <div class="info">
                <a class="name">{{item.userName}}</a>
                <p>{{item.time}}</p>
              </div>
              <p class="intro">{{item.comment}}</p> 
            </div>
            <div @click="DeleteComment(item,event)" class="delete">删除</div>
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
        Id: 0,
        src: "//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
        userName: "简宝玉",
        comment: "这个界面应该更美观点",
        time: "2019年4月4日 16:44"
      },{
        Id: 1,
        src: "//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
        userName: "行距版君",
        comment: "欢迎加入丰富多彩的原创内容社区欢迎加入丰富多彩的原创内容社区欢迎加入丰富多彩的原创内容社区欢迎加入丰富多彩的原创内容社区欢迎",
        time: "2019年4月4日 16:44" 
      },{
        Id: 3,
        src: "//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
        userName: "简宝玉",
        comment: "这个界面应该更美观点",
        time: "2019年4月4日 16:44"
      }]
    }
  },
  methods: {
    DeleteComment(){

    }
  }
}
</script>
<style lang="stylus">
.el-main ul
  overflow hidden
  .right-cont
    max-width 80%
    .info p
      position absolute
      right 10px
      top 20px
      font-size 12px
      color #999
  .delete
    display inline-block
    display none
    float right
    margin-top 30px
    font-size 12px
    color #0c73c2
</style>
