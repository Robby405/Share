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
					<el-form-item :model="form" label="验证码" class="vertification">
						<el-input v-model="form.verification" placeholder="请输入验证码"></el-input>	
					</el-form-item>

					<img :src="ImgPassword"  class="img-password">
					<span class="img-refresh" @click="refresh">刷新</span>
					<div class="rember-pass">
						<el-checkbox v-model="form.remberPassword">记住密码</el-checkbox>
						<span href="/register" @click="Register()" class="register">还未注册？先注册</span>
					</div>	
					<el-form-item>
						<el-button type="primary" @click="Login()">登录</el-button>
						<!-- <el-button @click="Register()">注册</el-button> -->
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
				psw: '',
				verification: '',
				remberPassword: true
			},
			ImgPassword: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8-a7jt6sDD3R2xwjbwRMzYMYh5Ki5uGhONUmJwTqMgQxK8Zjqg",

		}
	},
	methods: {
		Login(){
			if(!this.form.name || !this.form.psw){
				this.GLOBAL.showMess('用户名或密码不能为空');
				return;
			}else if(!this.form.verification){
				this.GLOBAL.showMess('验证码不能为空');
			}
			this.$router.push({ path: '/' });
		},
		Register(){
			this.$router.push({ path: '/register' });
		},
		refresh(){

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
						.vertification
							width 60%
							display inline-block
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
								.el-button+.el-button 
									margin-left: 0
								.el-button--primary
									background-color rgba(255,65,15,0.8)
									border-color rgb(51,51,51)
						.img-password
							width 22%
							max-width 120px
							height 40px
							background-color #fff
							display inline-block
							vertical-align middle
							margin-left 5%
							margin-right 2%
						.rember-pass
							color rgba(255,65,15,0.8)
							margin-bottom 10px
							.el-checkbox__inner
								border-color rgb(51,51,51)
							.el-checkbox__label
								color rgba(255,255,255,0.8)
							.register
								color rgba(255,255,255,0.8)
								font-size 14px
								float right
								display inline-block
								&:hover
									border-bottom 1px solid rgba(255,255,255,0.8)
</style>

