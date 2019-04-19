<template>
  <div class="share-wrapper">
    <div class="share-container">
      <div class="title">
        <a href="/">分享</a>
        <div class="actions">
          <span>写文章</span>
          <el-button @click="backTo()">退出分享</el-button>
          <el-button type="primary" @click="publish()">
            <i class="iconfont icon-icon_fabu"></i>
            发布分享
          </el-button>
        </div>
        
      </div>
      <div class="editor-wrapper">
        <div class="writeCover">
          <div class="writeCover-previewWapper">
            <label class="upload-wrapper">
              <input type="file" accept=".jepg, .jpg, .png" class="upload-input">
              <i class="iconfont icon-camera"></i>
            </label>
          </div>
        </div>
        <div class="edit-title">
          <textarea name="title" placeholder="请输入标题" class="Input"></textarea>
        </div>
        <vue-wangeditor id="editor" :options="options" v-model="content" :init-content="initContent"></vue-wangeditor>
      </div>
    </div> 
    <v-footer></v-footer>
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>{{msg}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogConfirm">确 定</el-button>
      <el-button @click="dialogCancel">取 消</el-button>  
    </span>
  </el-dialog>   
  
  </div>
</template>
<script>
import footer from './Footer'
export default {
  components: {
    'v-footer': footer
  },
  data(){
    return {
      dialogVisible: false,
      msg: '',
      initContent: '',
      text: '请输入内容',
      content: '<p>edit here</p>',
      options: {
        width: '100%', // 自定义单位，字符串
        height: '300px', // 自定义单位，字符串
        // 更多配置项请看官网或者官网文档
        menus: [
          'head',  // 标题
          'bold',  // 粗体
          'fontSize',
          'fontName',
          'italic',  // 斜体
          'strikeThrough', //删除线
          'underline',  // 下划线
          'redo',  // 重复
          'link', //插入链接
          'undo', //撤销
          'quote', //引用
          /* ---- 新增 ---- */
          'clearStyle', //清除文字的样式
          'clearFormat', //清除文字的格式
          'clearAll', //一键清空编辑器
          'insertCode', //插入带类名的代码
          // <pre class="className"><code class="className">hellow world</code></pre>
          'fullscreen' // 全屏
        ],
        pasteFilterStyle: true,  // 打开/关闭粘贴样式的过滤
      }
    }
  },
  methods: {
    backTo(){
     this.dialogVisible = true;
     this.msg = '确定关闭吗？（关闭后不会保存任何信息）'
    },
    publish(){
      this.$router.push('/');
    },
    dialogConfirm(){
      this.$router.push('/');
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
@import url('//at.alicdn.com/t/font_1080948_9k89htvjxj6.css');
.share-wrapper
  width 1200px
  margin 0 auto
  background-color #fff
  .share-container
    .title
      height 70px
      line-height 70px
      border-bottom 1px solid #f0f0f0
      font-size 16px
      a
        float left
        margin-left 20px
        font-size 20px
        text-decoration none
        color #666
      .actions
        width 60%
        line-height 70px
        margin 0 auto
        >span
          display inline-block
          text-align center
        .el-button
          float right
          margin-top 15px
          margin-left 10px
          height 40px
    .editor-wrapper
      width 60%
      margin 0 auto
      margin-top 30px
      min-height 767px
      .writeCover
        width 100%
        min-height 192px
        text-align center
        color #808080
        line-height 192px
        background-color #f7f8f9
        .writeCover-previewWapper
          height 100%
          justify-content center
          .upload-wrapper
            display block
            cursor pointer
            .upload-input
              display none
            .icon-camera
              font-size 42px
              color rgba(0,0,0,0.2)
      .edit-title
        margin 16px 0
        border 0
        width 100%
        .Input
          height 44px
          min-height 44px
          width 100%
          display block
          border 0
          font-size 32px
          line-height 1.4
          font-weight 600
          outline none
          box-shadow none
          resize none
      #editor
        .w-e-toolbar
          background-color #fff !important
          border-top 1px solid rgb(204,204,204) !important
          border-bottom 1px solid rgb(204,204,204) !important
          border-left none !important
          border-right none !important
        .w-e-text-container
          border none !important
          .w-e-text
            overflow hidden !important
</style>
