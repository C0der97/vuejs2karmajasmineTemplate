<template>
    <div class="text-left container-fluid">
      <div class="row" >
      <div v-for="post in posts" :key="post.id"  class="col-md-4">
        <b-card  :title="post.title" tag="article"
            class="mb-2">
            <b-card-text>
                {{ post.body }}
            </b-card-text>
        </b-card>
      </div>
      </div>
    </div>
</template>

<script>
import { getData } from '@/services/service.js'
import { } from 'bootstrap'
export default {
  data () {
    return {
      posts: null
    }
  },
  methods: {
    getPosts () {
      getData().then((response) => {
        this.posts = response.data
      }).catch((err) => {
        this.posts = err
      })
    }
  },
  mounted () {
    this.getPosts()
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
