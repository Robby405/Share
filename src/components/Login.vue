<template>
	<div class="container">
		<div class="main-container">
			<h1>生活分享平台</h1>
			<h2>登录</h2>
			<div class="main">
				<el-form>
					<el-form-item :model="form" label="用户名">
						<el-input v-model="form.name" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item :model="form" label="密码">
						<el-input v-model="form.psw" type="password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="Login()">登录</el-button>
						<el-button @click="Register()">注册</el-button>
					</el-form-item>
				</el-form>
				
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			form: {
				name: '',
				psw: ''
			}
		}
	},
	methods: {
		Login(){
			this.$router.push({ path: '/' });
		},
		Register(){
			this.$router.push({ path: '/register' });
		}
	}
}
</script>
<style lang="stylus">
html
	height 100%
	body 
		width 100%
		height 100%
		#app 
			height 100%
			.container
				height 100%
				background-color #333
				overflow hidden
				.main-container
					width 30%
					height 100%
					margin 0 auto
					padding-top 5%
					color #fff
					h1
						font-weight 500
						text-align center
						padding-top 60px
						color #b9553b
					h2
						color #999
						font-weight normal
						text-align center
						padding-top 5px
					.main
						margin-top 5%
						.el-form-item
							.el-form-item__label
								line-height 25px
								color rgba(255,255,255,0.8)
						.el-form-item__content
							margin 0
							.el-button
								width 100%
								margin-bottom 10px
							.el-button--default:hover
									color #d63e16
									border-color #333333
									background-color #fff1ed
							.el-button+.el-button 
								margin-left: 0
							.el-button--primary
								background-color rgba(255,65,15,0.8)
								border-color rgb(51,51,51)

</style>

