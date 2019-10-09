<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/"  class="navbar-item" tag="a">
                <img src="../assets/logo.png" width="120" height="30" alt="logo" />
            </router-link>
            <a role="button" class="navbar-burger burger" :class="{ 'is-active': burger }" @click="burgerToogle()"
                aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': burger }">
            <div class="navbar-end">
                <router-link to="/" tag='a' class="navbar-item">Inicio
                </router-link>
                <div class="navbar-item has-dropdown" :class="{ 'is-active': submenuCategory }">
                    <a class="navbar-link is-arrowless" @click="submenuCategoryToogle()">
                        Categorias &nbsp;<font-awesome-icon :icon='menu'> </font-awesome-icon>
                    </a>
                    <div class="navbar-dropdown" v-show="submenuCategory">
                        <router-link v-for="categoria in categorias" :key='categoria.id'
                            :to="`/categories/${categoria.id}`" class="navbar-item" tag='a'>{{categoria.name}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      categorias: null,
      burger: false,
      submenuCategory: false,
      menu: 'angle-down'
    }
  },
  methods: {
    burgerToogle () {
      this.burger = !this.burger
    },
    submenuCategoryToogle () {
      this.submenuCategory = !this.submenuCategory
      this.menu = (this.submenuCategory) ? 'angle-up' : 'angle-down'
    }
  },
  mounted () {
    let self = this
    axios.get('http://localhost:8000/api/catalogo').then(resp => {
      self.categorias = resp.data
    })
  }
}
</script>
<style>
</style>
