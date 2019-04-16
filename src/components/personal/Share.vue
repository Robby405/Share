<template>
  <div>
    <el-container>
      <el-header>我分享的</el-header>
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

</style>
