<template>
	<div class="container">
		<div class="main-container">
			<h1>生活分享平台</h1>
			<h2>注册</h2>
			<div class="main">
				<el-form>
					<el-form-item :model="form" label="用户名">
						<el-input v-model="form.name" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item :model="form" label="手机号">
						<el-input v-model="form.PhoneNumber" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item :model="form" label="手机验证码" class="phone-vertific">
						<el-input v-model="form.PhonePsw" placeholder="请输入手机验证码"></el-input>
					</el-form-item>
					<div class="phone-txt">
						<el-button type="primary" @click="getPhoneTxt(form.PhoneNumber)">获取短信验证码</el-button>
					</div>
					<el-form-item :model="form" label="密码">
						<el-input v-model="form.psw" type="password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="Register">注册</el-button>
					</el-form-item>
				</el-form>
				
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	// eslint-disable-next-line
	/* eslint-disable */
	data(){
		return {
			form: {
				name: '',
				PhoneNumber: '',
				PhonePsw: '',
        psw: '',
			}
		}
	},
	methods: {
		Register(){
			if(!this.form.name){
				this.GLOBAL.showMess('用户名不能为空');
				return;
			}
			if(!this.form.PhoneNumber || !this.form.PhonePsw){
				this.GLOBAL.showMess('手机号或验证码不能为空');
			}
			if(!this.form.psw){
				this.GLOBAL.showMess('密码不能为空');
				return;	
			}
			let obj = {
				name: this.form.name,
				PhoneNumber: this.form.PhoneNumber,
				PhonePsw: this.form.PhonePsw, //验证码
        psw: this.form.psw,
			}
			axios.post('http://localhost:3000/users/register', obj)
			.then(data => {
				console.log(data);
				let result = data.data;
				if(result.Success){
					this.$router.push({ path: '/login' });
				}else{
					this.GLOBAL.showMess(result.msg);
				}	
			})
		},
		getPhoneTxt(number){
			let check;
			check = this.checkCellPhone(number);
			// console.log(check);
			if(!check){
				this.GLOBAL.showMess('输入的手机号不正确，请重新输入');
			}
		},
		checkCellPhone(number){  //验证手机号码的合法性
			let flag = false;
			let regex = /^(((13[0-9])|(14[5|7])|(15[0-9])|(166)|(17[0-8])|(18[0-9])|(19[1|8|9]))+\d{8})$/;
			if(number.length != 11){
				this.GLOBAL.showMess('请输入11位手机号码!');
			}else if(!regex.test(number)){
				this.GLOBAL.showMess('请输入有效的手机号码')
			}else{
				flag = true;
			}
			return flag;
		}
	}
}
</script>
<style lang="stylus">
.phone-vertific
	width 65%
	display inline-block
.phone-txt
	width auto
	float right
	margin-top 25px
	display inline-block
	.el-button
		padding 12px 5px
</style>

