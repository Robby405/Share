<template>
	<div class="header">
		<div class="topNav">
			<el-row :gutter="20">
				<el-col :span="18">
					<div class="navLeft">
						<div class="logo"></div>
						<div class="links">
							<div class="tab-item">
								<router-link to="/">首页</router-link>
							</div>
							<div class="tab-item">
								<router-link to="/find">发现</router-link>
							</div>
							<div class="tab-item">
								<router-link to="/personal">个人中心</router-link>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="navRight">
						<div class="search">
							<input value placeholder="请输入内容">
							<icon name="search" width="24" height="24"></icon>
						</div>
						<div class="user">
							<div class="login">
									<router-link to="/login">登录</router-link>
									/
									<router-link to="/register">注册</router-link>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div> 
	</div>
	
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
	.header
		position fixed
		z-index 11
		height 70px
		width 100%
		max-width: 1440px
		background #fff
		.topNav
			width 90%
			max-width 1230px
			line-height 70px
			height 70px
			margin 0 auto
			color #4a4a4a
			.navLeft
				float left
				height 70px
				.logo
					display inline-block
					width 140px
					height 50px
					margin 10px 0
					background url(../assets/life.jpg)
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
			.navRight
				float right
				.search
					display inline-block
					vertical-align top
					margin-right 30px
					height 100%
					input
						border: 0;
						border-bottom: 1px solid #4a4a4a
						outline none
						margin-left 10px
						margin-right 10px
						padding: 0
						height: 32px
						width: 105px
						transition: width .3s
						overflow: hidden
						text-overflow: ellipsis
						white-space: nowrap
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

</style>
