<template>
  <div class="details-container">
     <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <a href="">
              <img :src="list.avatar" alt="">
            </a>
          </el-col>
          <el-col :span="18">
            <h1>{{ list.title }}</h1>
            <h2>{{ list.info }}</h2>
          </el-col>
          <el-col :span="4">
            <el-button class="isLiked" @click="likeCancel(list.id)" v-show="list.liked">
              <i class="iconfont icon-heart-fill" ></i>
              喜欢
            </el-button>
            <el-button @click="followCancel(list.id)" v-show="!list.liked">
              <i class="iconfont icon-heart-fill" ></i>
              喜欢
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-carousel>
          <el-carousel-item v-for="item in list.images" :key="item.id">
            <img :src="item" alt="图片找不到了"/>
          </el-carousel-item>
        </el-carousel>
        <div class="txt-wrapper">
          <p v-for="item in list.txts" :key="item.id">{{item}}</p>
        </div>
      </el-main>
      <el-container>
        <el-main>
          <div class="screenshot-conversation">
            <div class="comments-section">
              <h2 class="count">
                {{total}} 评论
              </h2>
              <div class="comments-sort">
                <a href="javascript:;" class="active" @click="allComment">所有的</a>
                <a href="javascript:;" @click="newestComment">最新的</a>
                <a href="javascript:;" @click="iLikes">我喜欢</a>
              </div>
              <ol class="comments">
                <li class="comment" v-for="(item,index) in comments" :key="item.id" v-if="index < pageSize">
                  <h2>
                    <a href="#">
                      <img :src="item.avatar" alt="">
                      {{ item.username }}{{index}}{{ pageSize}}
                    </a>
                    <span class="nudge-right"></span>
                  </h2>
                  <div class="comment-body">
                    <p>{{ item.comment }}</p>
                  </div>
                  <span class="comment-meta-likes" @click="likedComment(item)">
                    <i class="iconfont icon-heart-fill liked" v-show="item.isLiked"></i>
                    <i class="iconfont icon-heart-fill" v-show="!item.isLiked"></i>{{ item.likes }}
                  </span>
                  <p class="comment-meta">
                    <a href="" class="posted">{{ item.time }}</a>
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <el-pagination
            small
            layout="prev, pager, next"
            :page-size = "pageSize"
            :total="total"
            @current-change="currentChange">
          </el-pagination>
          <div class="writeComment">
            <textarea placeholder="请写下你的评论..." v-model="commentContent" rows="4"></textarea>
            <el-button type="primary" size="mini" round @click="publishComment">发表</el-button>
          </div>
        </el-main>
        <el-aside>
          <div class="author-info">
            <img src="https://66.media.tumblr.com/3531d6b279598ce7d25fde24e1e1872e/tumblr_o2prehhtjO1u60tx6o1_1280.jpg" alt="">
            <p class="name">Ris</p>  
            <div class="follow">
              <el-button class="isFollowed" @click="followCancel(list.id)" v-show="list.followed">
                <i class="iconfont icon-plus" ></i>
                已关注
              </el-button>
              <el-button @click="followCancel(list.id)" v-show="!list.followed">
                <i class="iconfont icon-plus" ></i>
                关注
              </el-button>
            </div>
            <p class="info">分享旅途的风景</p>
          </div>
        </el-aside>
      </el-container>
    </el-container>
    <v-footer></v-footer>
  </div>
</template>
<script>
import footer from './Footer.vue';
export default {
  components: {
    'v-footer': footer
  },
  data() {
		return {
      list: {
				id: 0,
				avatar: "https://picjumbo.com/wp-content/uploads/woman-on-carousel-swing-ride_free_stock_photos_picjumbo_HNCK8794-2210x1473.jpg",
				title: 'Racing car of F1',
				info: 'Anton Firtsler (kit8)',
        liked: true,
        followed: true,
				images: [
					'https://66.media.tumblr.com/3531d6b279598ce7d25fde24e1e1872e/tumblr_o2prehhtjO1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/f5460d1e1e8b5a2a94cbea24dd85084e/tumblr_o4u21mqbfL1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/266fc6143cb78fef72f084c429ef8d18/tumblr_o3pc5xJlFG1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/2f271139aa97336c565e1e390d55a9ed/tumblr_o4u1dacAx01u60tx6o1_1280.jpg'
        ],
        txts: [
          '今天晚上细心数了一下，在咱们国家34个省级行政区中，自己已经不知不觉走过了19个，或是出差执行任务，或是旅行放松心情，领略到了西南地区的大好河山，欣赏到了江南地区的小桥流水，还感受到了西北荒芜地区的残酷无情。',
          '青山绿水环绕，高楼建筑叠起，秀丽景色延绵。除了北上广以外，这是我见过的最繁华的都市。夜晚的重庆有小香港之称，其夜景不亚于上海的外滩，不输于北京的世贸天阶，夜晚里的洪崖洞更被称为中国版的千与千寻，美的就像一个“梦”。见过北京13号线地面上的地铁，却从没见过重庆空中的轻轨，第一次到重庆乘坐轻轨时有一种农村人去城里赶大集的感觉，感到很新鲜，尤其是看到2号线李子坝站轻轨穿越居民楼的场景，内心更是惊奇不已。重庆是一个“网红景点”集结地，嘉陵江畔磁器口古镇，《从你的全世界路过》电影拍摄地点江畔寻花咖啡屋，网红书店钟书阁，两江交汇朝天门以及南滨路的江景等等。重庆是一座很有空间感、层次感的城市，在一座商厦里一楼可能是五楼，五楼亦可能是一楼，大家可以自行体会。',
          '不到重庆，不知道什么是火辣热情；不到重庆，不知道什么是正宗火锅。作为超级能吃咸、能吃麻、能吃辣的另类山东大汉，火锅成为我的最爱，每次到重庆都是必点，要么两天三顿，要么三天四顿。重庆的火锅确实不同于北方的火锅，北方主要以牛羊肉为主、蔬菜为辅，而重庆以鸭肠、毛肚为主，牛羊肉蔬菜为辅，当然这也看个人的吃法。北方火锅的辣往往轻柔一些，而重庆火锅的辣让人叫服。另外，重庆串串香也是全国出了名的，色、香、味、辣俱全，并且吃上去更小资、经济、实惠一些，适合三五人聚餐。',
          '简单说完重庆的美景、美食，再聊聊重庆的美女们，这里我想重点说一下重庆大妈。北方的大妈往往都是淳朴保守、衣着简单，顶多烫个大波浪，而重庆大妈即使说不上浓妆艳抹，也敢说是在追逐时代潮流，衣着打扮追求一种休闲时尚。无论是公交上还是轻轨上，都可以见到大妈下着丝袜、上批风衣、香水味浓，让人感觉到非常潇洒豁达的生活态度，其实也值得北方大妈借鉴。'
        ],
        comments: [{
          id: 1,
          avatar: 'https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg',
          username: 'Ris',
          comment: 'wow',
          time: '2019-4-15 14:03',
          likes: 13,
          isLiked: true,
        },{
          id: 2,
          avatar: 'https://66.media.tumblr.com/608873f19e745131dadb9e4ed8c7c8c8/tumblr_o4u3c7uObl1u60tx6o1_1280.jpg',
          username: 'Leo',
          comment: 'It is so beautiful',
          time: '2019-4-15 14:20',
          likes: 15,
          isLiked: false,
        },{
          id: 3,
          avatar: 'https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg',
          username: 'Ris',
          comment: 'wow',
          time: '2019-4-15 14:03',
          likes: 13,
          isLiked: false,
        },{
          id: 4,
          avatar: 'https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg',
          username: 'Ris',
          comment: 'wow',
          time: '2019-4-15 14:03',
          likes: 13,
        },{
          id: 5,
          avatar: 'https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg',
          username: 'Ris',
          comment: 'wow',
          time: '2019-4-15 14:03',
          likes: 13,
          isLiked: false,
        },{
          id: 6,
          avatar: 'https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg',
          username: 'Ris',
          comment: 'wow',
          time: '2019-4-15 14:03',
          likes: 13,
          isLiked: false,
        },{
          id: 7,
          avatar: 'https://picjumbo.com/wp-content/uploads/little-girl-on-a-swing_free_stock_photos_picjumbo_IMG_9728-2210x1473.jpg',
          username: 'Ris',
          comment: 'wow',
          time: '2019-4-15 14:03',
          likes: 13,
          isLiked: false,
        }]
      },
      total: 0,
      pageSize: 5,
      comments: [],
      commentContent: ''
    }
	},
  mounted: function(){
    this.total = this.list.comments.length;
    if(this.list.comments.length <= this.total){
      this.comments = this.list.comments;
    }else{
      for(let i = 0; i <= this.list.comment; i++){
        this.comments = this.list.comments[i];
      }
    }
    let ID = this.$route.path.split('/')[2];
  },
  methods: {
    currentChange(index){
      let min = (index -1) * this.pageSize;
      let max = (index) * this.pageSize;
      max = max > this.total ? this.total : max;
      this.comments = [];
      for(let i = min; i < max; i++){
        this.comments.push(this.list.comments[i]);
      }
    },
    likeCancel(id){
      this.list.liked = ! this.list.liked;
    },
    followCancel(id){
      this.list.followed = ! this.list.followed;
    },
    publishComment(){
      let date = new Date();
      let y = date.getFullYear(), m = date.getMonth()+ 1, d = date.getDate(), h = date.getHours(), minu = date.getMinutes();
      // console.log(h.length);
      if(h < 10) h = '0'+ h;
      if(minu < 10) minu = '0' + minu;
      let fullDate = y + '-' + m + '-' + d + ' ' + h + ':' + minu;
      let Id = this.total + 1;
      let obj = {
        id: Id,
        avatar: 'https://66.media.tumblr.com/0b0c9d44a4d5ff503218e5b1dbed56c4/tumblr_o2prriWEkI1u60tx6o1_1280.jpg',
        username: 'Tommy',
        comment: this.commentContent,
        time: fullDate,
        likes: 0,
        isLiked: false,
      }
      this.list.comments.unshift(obj);
      this.total ++;
      this.commentContent = '';
    },
    likedComment(msg){  //点赞评论
      this.comments.forEach(item => {
        if(item.id === msg.id){
          if(msg.isLiked){
            item.likes --;
          }else{
            item.likes ++;
          }
          item.isLiked = !item.isLiked;
        }
      });
    },
    iLikes(){
      this.comments = this.list.comments.filter( item => {
        if(item.isLiked){
          return item;
        }
      });
      this.total = this.comments.length;
      this.changeActive(2);
    },
    allComment(){
      this.total = this.list.comments.length;
      if(this.list.comments.length <= this.total){
        this.comments = this.list.comments;
      }else{
        for(let i = 0; i <= this.list.comment; i++){
          this.comments = this.list.comments[i];
        }
      }
      this.changeActive(0);
    },
    newestComment(){
      let time = new Date().toLocaleString().replace(/\//g,'-');
      time = time.split(' ')[0];
      this.comments = [];
      this.comments = this.list.comments.filter( item => {
        if(item.time.split(' ')[0] === time){
          return item;
        }
      });
      this.total = this.comments.length;
      this.changeActive(1);
    },
    changeActive(index){
      let aLis = document.querySelectorAll('.comments-sort a');
      aLis.forEach(item => {
        item.classList.remove('active');
      })
      aLis[index].classList.add('active');
    }
  }
}
</script>
<style lang="stylus">
@import url('//at.alicdn.com/t/font_1080948_c1336oo0x77.css');
.details-container
  background-color #fff
  width 1200px
  margin 0 auto
  >.el-container.is-vertical 
    margin-bottom 80px
    .el-header
      padding 20px 20px
      height auto !important
    .el-col
      margin-bottom 0 !important
    .el-col-2
      img
        width 48px 
        height 48px
        border-radius 50%
    .el-col-18
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
    .el-col-4
      .el-button.isLiked
        color #ff410f
        border-color #ff410f
        background-color rgba(255, 65, 15, .1) 
      .el-button:hover
        color rgba(255, 65, 15, .6) 
        border-color rgba(255, 65, 15, .6)
        background-color rgba(255, 65, 15, .1)
      .el-button.isLiked:hover
        color #ff410f
        border-color #ff410f
        background-color rgba(255, 65, 15, .1) 
      .el-button + .el-button
        margin-left 0 !important
    .el-main
      padding 0
      .el-carousel 
        .el-carousel__container
          height 500px
          .el-carousel__item img
            width 100%
            height 100%         
          .el-carousel__item:nth-child(2n) 
            background-color #99a9bf      
          .el-carousel__item:nth-child(2n+1)
            background-color #d3dce6
        .el-carousel__indicators
          li
            border-top none
      .txt-wrapper
        width 80%
        margin 60px auto
        >p
          color #444
          margin-top 30px
    .el-container
      width 80%
      margin 0 auto
      margin-top 15px
      border-top 1px solid #f0f0f0
      padding-top 50px
      .el-main
        width 60%
        padding 0 20px
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
              margin 30px 0
              max-height 465px
              overflow hidden
              list-style none
              >li
                float none
                margin 0 0 15px 0
                padding 0
                font-size 15px
                line-height 1.4em
                color #555
                border-bottom 1px dashed #f0f0f0
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
                  display inline-block
                  overflow hidden
                  p
                    line-height 20px 
                    margin 0 0 5px 0
                    padding 0
                .comment-meta-likes
                  display inline-block
                  vertical-align top
                  line-height 20px 
                  white-space nowrap
                  font-size 12px
                  color #aaa
                  font-weight normal
                  padding-left 15px   
                  &:hover
                    cursor pointer
                    color rgba(255, 65, 15, .5)
                  .liked
                    color #ff410f
                .comment-meta
                  margin 0 0 15px 42px
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
          margin-top 40px
          >textarea
            width 75%
            border-color #ddd
            border-radius 4px
            padding-left 10px
            line-height 20px
            flex 1
            &:focus
              outline none
          >.el-button
            margin-left 20px
            margin-top 55px
            padding 7px 25px
            height 28px
            width auto
      .el-aside
        width 40% !important
        .author-info
          width 75%
          margin-left 23%
          box-shadow: 3px 3px 2px #b7b7b7
          border 1px solid #f0f0f0
          img
            display block
            margin 15px auto
            width 80px
            height 80px
            border-radius 50%
          p
            line-height 25px
            text-align center
            margin-bottom 10px
          .name
            color #555
            font-size 20px
          .follow
            text-align center
            .isFollowed
              color #ff410f
              border-color #ff410f
              background-color rgba(255, 65, 15, .1)
            .isFollowed:hover
              color #ff410f
              border-color #ff410f
              background-color rgba(255, 65, 15, .1)
            .el-button
              padding 10px 20px
            .el-button:hover
              color rgba(255, 65, 15, .6) !important
              border-color rgba(255, 65, 15, .6) !important
              background-color rgba(255, 65, 15, .1) !important 
            .el-button + .el-button
              margin 0
          .info
            color #999
            margin-bottom 10px
            margin-top 10px
</style>
