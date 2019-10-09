<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Primary bold title
                </h1>
                <h2 class="subtitle">
                    Primary bold subtitle
                </h2>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      message: 'hello!'
    }
  },
  created () {
    this.message = 'bye!'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
