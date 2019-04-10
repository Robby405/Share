<template>
  <div class="app-main">
    <v-header></v-header>
    <div class="find-wrapper">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      </el-row>
    </div>
  </div>    
</template>
<script>
import header  from "./Header";
export default { 
  data(){
    return {

    }
  },
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus">
.find-wrapper
  width 65%
  margin 0 auto
  padding-top 70px
</style>