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
					<el-form-item :model="form" label="密码">
						<el-input v-model="form.psw" type="password" placeholder="请输入密码"></el-input>
					</el-form-item>
          <el-form-item :model="form" label="确认密码">
						<el-input v-model="form.pswSecond" type="password" placeholder="请再次输入密码"></el-input>
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
export default {
	data(){
		return {
			form: {
				name: '',
        psw: '',
        pswSecond: ''
			}
		}
	},
	methods: {
		Register(){
			this.$router.push({ path: '/login' })
		}
	}
}
</script>
<style lang="stylus">

</style>

