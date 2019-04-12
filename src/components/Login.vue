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
					<canvas id="myCanvas" class="img-password" width="80px" height="27px" style="border:1px solid #d3d3d3;"></canvas>
					<!-- <img :src="ImgPassword"  class="img-password"> -->
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
import '../lib/md5.js';
import Axios from 'axios';

export default {
	data(){
		return {
			form: {
				name: '',
				psw: '',
				verification: '',
				remberPassword: true
			},
			verif: ''
		}
	},
	mounted: function(){
		this.createCode();
		// this.getCookie(this.form.name);
	},
	methods: {
		// eslint-disable-next-line
		/* eslint-disable */ 
		Login(){
			if(!this.form.name || !this.form.psw){
				this.GLOBAL.showMess('用户名或密码不能为空');
				return;
			}else if(!this.form.verification){
				this.GLOBAL.showMess('验证码不能为空');
			}
			if(this.form.verification !== this.verif){
				this.GLOBAL.showMess('验证码不正确');
				this.createCode();
			}else{
				//记住密码
				let _this = this;
				if(_this.form.remberPassword){
					_this.setCookie(_this.form.name,_this.form.psw,7);
					_this.setCookie(_this.form.psw, )
				}else{
					_this.clearCookie();
				}
				let obj = {
					name: this.form.name,
					psw: this.md5Token(this.form.psw),
					remberPassword: this.form.remberPassword
				}
				Axios.post('http://localhost:3000/users/login', obj)
				.then((data) => {
					let result = data.data;
					if(result.Success){
						this.$router.push({ path: '/' });
					}else{
						this.GLOBAL.showMess(result.msg);
					}
				});
			}	
		},
		Register(){
			this.$router.push({ path: '/register' });
		},
		refresh(){
			this.createCode();
		},
		createCode() {
			var code = "";
			var codeLength = 4;//验证码的长度，可变
			var canvas=document.getElementById('myCanvas');//获取画布
			var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符
			for (var i = 0; i < codeLength; i++) {
				var charIndex = Math.floor(Math.random() * 36);
				code += selectChar[charIndex];
			}
			this.verif = code;
			if (canvas) {
				var ctx=canvas.getContext('2d');
				ctx.fillStyle='#FFFFFF';
				ctx.fillRect(0,0,70,27);
				ctx.font="20px arial";
				// 创建渐变
				var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
				gradient.addColorStop("0","magenta");
				gradient.addColorStop("0.5","blue");
				gradient.addColorStop("1.0","red");
				// 用渐变填色
				ctx.strokeStyle=gradient;
				ctx.strokeText(code,5,20);//画布上添加验证码
			}
		},
		md5Token(word) {  //加密
			var hash = md5.create();
			hash.update(word);
			var result = hash.hex();
			return result;
		},
		setCookie(c_name, c_psw, exdays){
			let exdate = new Date();
			exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);
			window.document.cookie = 'userName=' + c_name + ";path=/;expires=" + exdate.toGMTString();
			window.document.cookie = 'userPsw=' + c_psw + ';path=/;expires=' + exdate.toGMTString(); 
		},
		getCookie(name){
			if(document.cookie.length > 0){
				let arr = document.cookie.split(';');
				console.log(document.cookie);
				for(let i = 0; i < arr.length ; i++){
					let arr2 = arr[i].split('=');
					// console.log(arr2);
					//判断查找相对应的值
					if(arr2[0] == name){
						this.form.psw = arr2[1];
						console.log(this.form.psw);
					}
				}
			}
		},
		clearCookie(){
			this.setCookie("","",-1);
		}
	},
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
			.el-message-box__wrapper
				overflow-y scroll
</style>

