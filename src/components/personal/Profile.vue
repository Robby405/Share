<template>
  <el-container>
    <el-header>我的资料</el-header>
    <el-main class="profile">
      <div class="avatar">
        <img :src="src" alt="没有头像">
        <el-upload class="upload"
        :list-type="picture"
        action="">
          <el-button type="danger" round size="mini">更换头像</el-button>
        </el-upload>
      </div>
      <el-form :model="form" :label-width="MaxWidth">
        <el-form-item label="昵称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍">
          <el-input type="textarea" :rows="4" placeholder="请输入你的个人介绍" v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.radio">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
            <el-radio :label="3">请选择</el-radio>
          </el-radio-group> 
        </el-form-item>
        <el-form-item class="save">
          <el-button type="primary" @click="onSave" round>保存</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data(){
    return {
      MaxWidth: "80px",
      src: "//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
      picture: ".png/.jpg",
      form: {  
        name: "简宝玉",
        intro: "",
        radio: 3
      }   
    }
  },
  methods: {
    onSave(){

    }
  }
}
</script>
<style lang="stylus">
.profile
  .avatar
    display inline-block 
    width 100px
    padding 20px 0
    img 
      width 100px
      height 100px
      border-radius 50%
      border 1px solid #f0f0f0
    .upload
      text-align center
      margin 10px 0
  .el-form
    display inline-block
    vertical-align top
    width 70%
    padding 20px 0px 20px 50px
    .el-form-item
      padding-bottom 20px
      border-bottom 1px solid #f0f0f0
      .el-form-item__label
        text-align left 
      .el-form-item__content
        .el-button.is-round
          padding 10px 35px
    .save
      border-bottom none
      
</style>
