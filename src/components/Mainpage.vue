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
							<span slot="title">旅游</span>
						</a>
          </el-menu-item>
          <el-menu-item index="2">
						<a href="#gw">
							<i class="el-icon-menu"></i>
							<span slot="title">购物</span>
						</a>
          </el-menu-item>
          <el-menu-item index="3">
						<a href="#gw">
							<i class="el-icon-document"></i>
							<span slot="title">美妆</span>
						</a>
          </el-menu-item>
          <el-menu-item index="4">
						<a href="">
							<i class="el-icon-setting"></i>
							<span slot="title">生活小常识</span>
						</a>
          </el-menu-item>
          <el-menu-item index="5">
						<a href="">
							<i class="el-icon-setting"></i>
							<span slot="title">导航五</span>
						</a>
          </el-menu-item>
          <el-menu-item index="6">
						<a href="">
							<i class="el-icon-location"></i>
							<span slot="title">导航一</span>
						</a>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
		<div class="view-body">
			<div class="recommend">
				<el-row :gutter="20">
					<el-col :span="6">
						<div class="rec-item">
							<i class="el-icon-goods"></i>
							<div class="rec-name">购物购物</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="el-icon-view"></i>
							<div class="rec-name">天眼购物</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="el-icon-picture"></i>
							<div class="rec-name">图片购物</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="el-icon-edit"></i>
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
						<el-col :span="6" v-for="item in lists" :key="item.id">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo="item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>	
			</div>
			<div class="life-recommend gw" >
				<h2 id="gw">购物</h2>
				<div class="card-container" >
					<el-row :gutter="20">
						<el-col :span="6" v-for="item in lists" :key="item.id">
							<router-link :to="{ name: 'details', params: { id: item.id}}">
								<v-card :cardInfo="item"></v-card>
							</router-link>
						</el-col>
					</el-row>
				</div>	
			</div>
		</div>
		<v-footer></v-footer>
	</div>    
</template>
<script>
import header from './Header'
import carousel from './Carousel'
import card from './Card'
import footer from './Footer'
export default {
	data(){
		return {
			lists: [{
				id: 0,
				avatar: "https://picjumbo.com/wp-content/uploads/woman-on-carousel-swing-ride_free_stock_photos_picjumbo_HNCK8794-2210x1473.jpg",
				title: 'Racing car of F1',
				info: 'Anton Firtsler (kit8)',
				liked: true,
				images: [
					'https://66.media.tumblr.com/3628eba9b4d1deab7fd8c07fd2a20138/tumblr_o4u2kiCjeL1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/f5460d1e1e8b5a2a94cbea24dd85084e/tumblr_o4u21mqbfL1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/266fc6143cb78fef72f084c429ef8d18/tumblr_o3pc5xJlFG1u60tx6o1_1280.jpg',
					'https://66.media.tumblr.com/2f271139aa97336c565e1e390d55a9ed/tumblr_o4u1dacAx01u60tx6o1_1280.jpg'
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
			top: 15%
			left: 16%
			z-index: 8
			width 19%
			max-width 265px
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
						color #909399
					span
						color #303133
			.is-active
				color #ff410f
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
</style>