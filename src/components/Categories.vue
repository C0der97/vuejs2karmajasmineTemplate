<template>
<div style="margin-top:100px">
 <h1> {{categoria}} </h1>
</div>
</template>
<script>
export default {
  data () {
    return {
      categoria: this.$route.params.category
    }
  },
  watch: {
    '$route' (to, from, next) {
      this.categoria = to.params.category
    }
  }
}
</script>
<style scoped>
</style>
