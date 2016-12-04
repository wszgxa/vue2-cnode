<template>
  <div>
    haha
  </div>
</template>
<script>
  export default {
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