<template>
    <div id="app">
        <Nav />
        <transition>
            <router-view />
        </transition>
    </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    iconDropDown () {
      if (this.menu) {
        return 'angle-up'
      } else {
        return 'angle-down'
      }
    }
  }
}
</script>

<style>
</style>
