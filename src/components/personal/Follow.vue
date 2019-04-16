<template>
  <div>
    <el-container>
      <el-header>我关注的</el-header>
      <el-main>
        <ul class="el-main-wrapper">
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
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确认取消关注吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogConfirm">确 定</el-button>
        <el-button @click="dialogCancel">取 消</el-button>
      </span>
    </el-dialog>
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
      dialogVisible: false,
      message: {}
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
      this.message = item;
      if(item.FollowContent === '已关注'){
        return;
      }else if(item.FollowContent === '取消关注'){
        this.dialogVisible = true;
      }
    },
    dialogConfirm(){
      console.log(this.message);
      this.lists.forEach((item) => {
        if(item.userName === this.message.userName){
          this.lists.pop(item);
        }
      })
      this.dialogVisible = false;
    },
    dialogCancel(){
      this.dialogVisible = false;
    },
    handleClose(){
      this.dialogVisible = false;
    }
  }
}
</script>
<style lang="stylus">
.el-container
  .el-main .el-main-wrapper
    >li
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
.el-dialog__wrapper
  overflow-y scroll
</style>
