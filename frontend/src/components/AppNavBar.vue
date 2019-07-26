<template>
  <nav
    class="navbar is-fixed-top is-spaced is-shadowed"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a href="#/" class="navbar-item">
          <fa-icon icon="compass" style="margin-bottom:0.25em" />&nbsp;
          <span class="heading">Weather</span>
          <span class="heading has-text-weight-light">app</span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}"></div>
    </div>
  </nav>
</template>

<script>
import { routes } from '@/router'
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
  },
  beforeCreate() {
    this.routes = routes
  },
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.2);
}
</style>
