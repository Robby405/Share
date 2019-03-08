<template>
	<div>
		<v-header></v-header>
		<v-carousel></v-carousel>
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
			<div class="life-recommend">
				<h2>推荐1</h2>
				<div class="card-container">
					<el-row :gutter=20>
						<el-col :span=6>
							<v-card></v-card>
						</el-col>
						<el-col :span=6>
							<v-card></v-card>
						</el-col>
						<el-col :span=6>
							<v-card></v-card>
						</el-col>
						<el-col :span=6>
							<v-card></v-card>
						</el-col>
						<el-col :span=6>
							<v-card></v-card>
						</el-col>
						<el-col :span=6>
							<v-card></v-card>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		
	</div>    
</template>
<script>
import header from './Header'
import carousel from './Carousel'
import card from './Card'
export default {
	data(){
		return {
			
		}
	},
	components: {
		'v-header': header,
		'v-carousel': carousel,
		'v-card': card
	}
}
</script>
<style lang="stylus">
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