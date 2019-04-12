<template>
	<div class="header">
		<div class="topNav">
			<el-row :gutter="20">
				<el-col :span="17">
					<div class="navLeft">
						<div class="logo">Share</div>
						<div class="links">
							<div class="tab-item">
								<router-link to="/">首页</router-link>
							</div>
							<div class="tab-item">
								<router-link to="/find">发现</router-link>
							</div>
							<div class="tab-item">
								<router-link to="/personal/profile">个人中心</router-link>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="search">
						<input value placeholder="请输入内容">
						<icon name="search" width="24" height="24"></icon>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="user" el-dropdown-link>
						<div class="login" v-if="isLogin==false">
								<router-link to="/login">登录</router-link>
								/
								<router-link to="/register">注册</router-link>
						</div>
						<el-dropdown @command="handleCommand" v-if="isLogin==true">
							<div class="el-dropdown-link">
								<img :src="src" alt="" class="avatar">
								<i class="el-icon-arrow-down el-icon--right"></i>
							</div>
							<el-dropdown-menu slot="dropdown" v-if="!isLogin">
								<el-dropdown-item command="/edit">发表</el-dropdown-item>
								<el-dropdown-item command="/personal/likes">喜欢</el-dropdown-item>
								<el-dropdown-item command="/login">注销</el-dropdown-item>
							</el-dropdown-menu>	
						</el-dropdown>
					</div>	
				</el-col>
			</el-row>
		</div> 
	</div>
	
</template>

<script>
export default {
	data(){
		return {
			isLogin: false,
			src: "//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",

		}
	},
	methods: {
		handleCommand(command) {
			this.$router.push(command);
		}
	}
}
</script>

<style lang="stylus">
#app
	.header
		position fixed
		z-index 11
		height 70px
		width 100%
		max-width: 1440px
		background #fff
		border-bottom 1px solid #f0f0f0
		.topNav
			width 90%
			max-width 1230px
			line-height 70px
			height 70px
			margin 0 auto
			color #4a4a4a
			.el-row
				.navLeft
					float left
					height 70px
					.logo
						display inline-block
						width 140px
						height 70px
						font-size 30px
						font-family fantasy
						line-height 70px
						background-size 140px 50px
					.links
						display inline-block
						vertical-align top
						margin 0 20px
						font-size 15px
						.tab-item
							display inline-block
							a
								display inline-block
								text-decoration none
								height 50px
								line-height 50px
								padding 0 20px
								color #4a4a4a
								font-size 16px
								transition all .2s
							a:hover
								text-decoration none 
								color #ff410f
							.router-link-exact-active
								color #ff410f
								font-weight bold
				.search
					display flex
					margin-right 30px
					height 100%
					margin-top 15px
					input
						flex 1
						border: 0;
						border-bottom: 1px solid #4a4a4a
						outline none
						margin 0px 10px 
						padding: 0
						height: 32px
						width: 105px
						transition: width .3s
						overflow: hidden
						text-overflow: ellipsis
						white-space: nowrap
					.svg-icon
						margin-top 6px
				.user
					display inline-block
					.login a
						display inline-block
						text-decoration none
						height 50px
						line-height 50px
						color #4a4a4a
						font-size 16px
						transition all .2s
					.el-dropdown
						height 60px
						&:focus
							outline none
						.el-dropdown-link
							display inline-block
							padding-right 25px
							.avatar
								margin-top 15px
								display inline-block
								width 40px
								height 40px
							.el-icon--right
								vertical-align middle
								margin-bottom 20px
.el-dropdown-menu
	.el-dropdown-menu__item
		padding 0 40px
</style>
