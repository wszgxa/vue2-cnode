<template>
  <div>
    <el-button @click.native="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="Hello world">
  </div>
</template>
<script>
  export default {
    data () {
      return { visible: false }
    },
    created () {
      this.$http({
        method: 'GET',
        url: '/api/v1/topics'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>