<template>
	<div class="app-main">
		<v-header></v-header>
		<v-carousel></v-carousel>
		<el-row class="second-menu">
      <el-col :span="24">	
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo">
          <a>推荐</a>
          <el-menu-item index="1">
						<a href="#ly">
							<i class="el-icon-location"></i>
							<span slot="title">旅游攻略</span>
						</a>
          </el-menu-item>
          <el-menu-item index="2">
						<a href="#gw">
							<i class="iconfont icon-shopping-fill"></i>
							<span slot="title">购物攻略</span>
						</a>
          </el-menu-item>
          <el-menu-item index="3">
						<a href="#mz">
							<i class="iconfont icon-crown-fill"></i>
							<span slot="title">美妆推荐</span>
						</a>
          </el-menu-item>
          <el-menu-item index="4">
						<a href="#xmz">
							<i class="iconfont icon-eye-fill"></i>
							<span slot="title">生活小妙招</span>
						</a>
          </el-menu-item>
          <el-menu-item index="5">
						<a href="#yl">
							<i class="iconfont icon-read-fill"></i>
							<span slot="title">语录</span>
						</a>
          </el-menu-item>
          <el-menu-item index="6">
						<a href="#dy">
							<i class="iconfont icon-Youtube-fill"></i>
							<span slot="title">电影</span>
						</a>
          </el-menu-item>
          <el-menu-item index="7">
						<a href="#hs">
							<i class="iconfont icon-book-fill"></i>
							<span slot="title">好书</span>
						</a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
		<div class="view-body">
			<div class="recommend">
				<el-row :gutter="20">
					<el-col :span="6">
						<div class="rec-item">
							<i class="iconfont icon-award"></i>
							<div class="rec-name">购物购物</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="iconfont icon-github"></i>
							<div class="rec-name">天眼购物</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="iconfont icon-gift"></i>
							<div class="rec-name">图片购物</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="iconfont icon-aperture"></i>
							<div class="rec-name">编辑购物</div>
						</div>
					</el-col>
				</el-row>
				
			</div>
		</div>
		<div class="view-container">
			<div class="life-recommend lv">
				<h2 id="ly">旅游</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists " :key="item.id" v-if="item.type === 'ly'">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo = "item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>	
			</div>
			<div class="life-recommend gw">
				<h2 id="gw">购物攻略</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists" :key="item.id" v-if="item.type === 'gw'">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo = "item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>	
			</div>
			<div class="life-recommend gw">
				<h2 id="mz">美妆推荐</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists" :key="item.id" v-if="item.type === 'mz'">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo = "item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>	
			</div>
			<div class="life-recommend gw">
				<h2 id="xmz">生活小妙招</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists" :key="item.id" v-if="item.type === 'xmz'">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo = "item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>	
				<div class="empty">这里空空如也</div>
			</div>
			<div class="life-recommend gw">
				<h2 id="yl">语录</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists" :key="item.id" v-if="item.type === 'yl'">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo = "item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>
				<div class="empty">这里空空如也</div>
			</div>
			<div class="life-recommend gw">
				<h2 id="dy">电影</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists" :key="item.id" v-if="item.type === 'dy'">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo = "item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>
				<div class="empty">这里空空如也</div>	
			</div>
			<div class="life-recommend gw">
				<h2 id="hs">好书</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists" :key="item.id" v-if="item.type === 'hs'">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo = "item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>	
				<div class="empty">这里空空如也</div>
			</div>
		</div>
		<v-footer></v-footer>
	</div>    
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import header from './Header'
import carousel from './Carousel'
import card from './Card'
import footer from './Footer'
export default {
	data(){
		return {
			lists: [{
				id: 0,
				type: "ly",
				avatar: "https://picjumbo.com/wp-content/uploads/woman-on-carousel-swing-ride_free_stock_photos_picjumbo_HNCK8794-2210x1473.jpg",
				title: 'Racing car of F1',
				info: 'Anton Firtsler (kit8)',
				liked: true,
				likes: 111,
				comments: 222,
				images: [
					'https://66.media.tumblr.com/3628eba9b4d1deab7fd8c07fd2a20138/tumblr_o4u2kiCjeL1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/f5460d1e1e8b5a2a94cbea24dd85084e/tumblr_o4u21mqbfL1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/266fc6143cb78fef72f084c429ef8d18/tumblr_o3pc5xJlFG1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/2f271139aa97336c565e1e390d55a9ed/tumblr_o4u1dacAx01u60tx6o1_1280.jpg'
				]
			},{
				id: 1,
				type: "gw",
				avatar: "https://picjumbo.com/wp-content/uploads/woman-on-carousel-swing-ride_free_stock_photos_picjumbo_HNCK8794-2210x1473.jpg",
				title: 'Racing car of F1',
				info: 'Anton Firtsler (kit8)',
				liked: true,
				likes: 11,
				comments: 22,
				images: [
					'https://www.artic.edu/iiif/2/6ad8f7d6-c8a9-5216-2664-09bd5691c6ed/full/400,/0/default.jpg',
					'https://www.artic.edu/iiif/2/7c1093fb-f82c-02aa-a743-b179f26fb89a/full/400,/0/default.jpg',
					'https://www.artic.edu/iiif/2/f9ae4fc0-5c4e-f15d-f9ca-71453a8de917/full/400,/0/default.jpg',
					'https://www.artic.edu/iiif/2/9ee6ba5d-97ee-8012-2ee5-7b540a048023/full/400,/0/default.jpg'
				]
			},{
				id: 2,
				type: "ly",
				avatar: "https://negativespace.co/wp-content/uploads/2019/04/negative-space-hot-air-balloon-over-calm-lake-1062x708.jpg",
				title: 'Racing car of F1',
				info: 'Anton Firtsler (kit8)',
				liked: true,
				likes: 11,
				comments: 22,
				images: [
					'https://negativespace.co/wp-content/uploads/2019/04/negative-space-aerial-view-of-snow-capped-mountains-1062x596.jpg',
					'https://thumb9.shutterstock.com/thumb_large/476794/578892505/stock-photo-creamy-fog-covered-the-famous-glacier-marmolada-in-morning-light-picturesque-and-gorgeous-scene-578892505.jpg',
					'https://thumb1.shutterstock.com/thumb_large/919514/553110769/stock-photo-woman-traveler-on-cliff-hiking-with-backpack-travel-lifestyle-concept-adventure-active-vacations-553110769.jpg',
					'https://negativespace.co/wp-content/uploads/2019/04/negative-space-bird-orange-mountain-sunset-water-944x708.jpg'
				]
			},{
				id: 3,
				type: "mz",
				avatar: "https://picjumbo.com/wp-content/uploads/woman-on-carousel-swing-ride_free_stock_photos_picjumbo_HNCK8794-2210x1473.jpg",
				title: 'Racing car of F1',
				info: 'Anton Firtsler (kit8)',
				liked: true,
				likes: 11,
				comments: 22,
				images: [
					'https://negativespace.co/wp-content/uploads/2019/04/negative-space-aerial-view-of-snow-capped-mountains-1062x596.jpg',
					'https://thumb9.shutterstock.com/thumb_large/476794/578892505/stock-photo-creamy-fog-covered-the-famous-glacier-marmolada-in-morning-light-picturesque-and-gorgeous-scene-578892505.jpg',
					'https://thumb1.shutterstock.com/thumb_large/919514/553110769/stock-photo-woman-traveler-on-cliff-hiking-with-backpack-travel-lifestyle-concept-adventure-active-vacations-553110769.jpg',
					'https://negativespace.co/wp-content/uploads/2019/04/negative-space-bird-orange-mountain-sunset-water-944x708.jpg'
				]
			}]
		}
	},
	components: {
		'v-header': header,
		'v-carousel': carousel,
		'v-card': card,
		'v-footer': footer
	}
}
</script>
<style lang="stylus">
@import url("//at.alicdn.com/t/font_1080948_f9czrt7csuu.css")
body
	overflow-y scroll
	background-color: #eee
	.app-main
		position relative
		max-width 1440px
		min-height 100%
		background-color #fff
		margin 0 auto
		.second-menu
			position fixed
			top: 9.5%
			left: 17%
			z-index: 8
			width 19%
			max-width 250px
			overflow hidden
			box-shadow 3px 3px 5px #888888
			ul>a
				display block 
				height 32px
				line-height 32px
				font-size 14px
				font-weight bold
				letter-spacing 2px 
				margin 0 27px
				padding-top: 20px
				border-bottom 3px solid #000
			li
				>a
					display block
					text-decoration none
					i
						color rgba(255, 65, 15, 0.8)
						margin-right: 5px;
						width: 24px;
						text-align: center;
						font-size: 20px;
						vertical-align: middle;
					span
						color #303133
			.is-active
				background-color rgba(255, 65, 15, .1)
			.el-menu-item:hover,.el-menu-item:focus
				background-color #fff1ed
		.view-body
			position relative
			left 25%
			width 75%
			.recommend
				width 80%
				margin-top 40px 
				margin-left 3%
				.rec-item i
					font-size 45px
					font-weight 100
					color #ff410f
					margin-left 37%
				.rec-name
					font-size 16px
					letter-spacing 1px
					color #4a4a4a
					margin-top 15px
					text-align center
		.view-container
			position relative
			left 25%
			width 75%
			margin-top 40px
			.life-recommend
				width 98%
				margin 0 auto
				h2
					margin-bottom 15px
					font-size 24px
					font-weight 500
					font-family PingFang SC
					white-space nowrap
				.card-container .el-col
					margin-bottom 20px
				.empty
					min-height 30px
					text-align left
					font-size 12px
					color #999
</style>