<template>
  <div>
    <el-container>
      <el-header>我关注的</el-header>
      <el-main>
        <ul>
          <li v-for = " item in lists " :key = "item.Id">
            <img :src="item.src" alt="没有头像" class="avatar">
            <div class="right-cont">
              <div class="info">
                <a class="name">{{item.userName}}</a>
                <div @mouseover="FollowEdit(item,$event)" @mouseleave="FollowRemove(item,$event)">
                  <el-button round type="danger" size="mini" @click="FollowCancel(item,$event)">{{item.FollowContent}}</el-button>
                </div>
                  <!-- <div @mouseenter="FollowEdit(item,$event)" v-if="item.isFollowed">  -->
                    <!-- <el-button round icon="el-icon-check" type="danger" size="mini">已关注</el-button>                    -->
                  <!-- </div>  -->
              </div>
              <p class="intro">{{item.intro}}</p>
            </div>
          </li>
        </ul>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
  /* eslint-disable */
  data(){
    return {
      lists: [{
        Id: 0,
        src: "//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
        userName: "简宝玉",
        intro: "欢迎加入丰富多彩的原创内容社区",
        isFollowed: true,
        FollowContent: '已关注'
      },{
        Id: 1,
        src: "//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
        userName: "行距版君",
        intro: "这个人很懒，什么也没留下......",
        isFollowed: true,
        FollowContent: '已关注'
      }],
      
    }
  },
  methods: {
    FollowEdit(item,event){
      item.FollowContent = "取消关注";
    },
    FollowRemove(item,event){
      item.FollowContent = "已关注";
    },
    FollowCancel(item,event){
      if(item.FollowContent === '已关注'){
        return;
      }else if(item,event){
        alert('取消关注');
      }
    }
  }
}
</script>
<style lang="stylus">
.el-main
  li
    position relative
    padding 15px 15px 15px 0
    border-top 1px solid #f0f0f0
    .avatar
      display inline-block
      width 48px
      height 48px
      border-radius 50%
      border 1px solid #f0f0f0
    .right-cont
      display inline-block
      vertical-align top
      margin-left 20px
      .info
        font-size 15px
        margin-top 5px
        .el-button--mini, .el-button--mini.is-round
          padding 4px 7px
          position absolute
          right 10px
          top 20px
          min-width 70px
      .intro
        font-size 12px
        margin-top 5px
        color #999
</style>
