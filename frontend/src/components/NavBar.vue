<template>
  <nav class="navbar" role="navigation is-transparent" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <fa-icon icon="compass" style="margin-bottom:0.25em" />&nbsp;
          <span class="heading">Weather</span>
          <span class="heading has-text-weight-light">app</span>
        </div>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item heading">Home</a>

          <div class="navbar-item has-dropdown is-hoverable has-text-success">
            <a class="navbar-item heading">More</a>
            <div class="navbar-dropdown is-boxed">
              <router-link
                v-for="(route, index) in routes"
                :to="route.path"
                tag="a"
                class="navbar-item heading"
                :href="route.path"
                :key="index"
                active-class="is-active"
                exact
              >{{ route.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { routes } from '@/router'
export default {
  beforeCreate() {
    this.routes = routes
  },
}
</script>

<style>
.navbar-dropdown > .navbar-item:not(.is-active) {
  color: gray;
}
</style>
