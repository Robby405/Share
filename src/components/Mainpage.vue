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
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="el-icon-view"></i>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="el-icon-picture"></i>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="rec-item">
							<i class="el-icon-edit"></i>
						</div>
					</el-col>
				</el-row>
				
			</div>
		</div>
	</div>    
</template>
<script>
import header from './Header'
import carousel from './Carousel'
// import card from './Card'
export default {
	data(){
		return {
			
		}
	},
	components: {
		'v-header': header,
		'v-carousel': carousel,
		// 'v-card': card
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
			.rec-item i
				font-size 55px
				font-weight 100
				color #ff410f
				margin-left 33%
</style>