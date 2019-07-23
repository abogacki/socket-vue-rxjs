<template>
  <nav class="navbar" role="navigation is-transparent" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

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
          <a class="navbar-item">Home</a>

          <div class="navbar-item has-dropdown is-hoverable has-text-success">
            <a class="navbar-item">More</a>
            <div class="navbar-dropdown is-boxed">
              <router-link
                v-for="(route, index) in routes"
                :to="route.path"
                tag="a"
                class="navbar-item has-text-primary"
                :href="route.path"
                :key="index"
                active-class="is-active"
                exact
              >{{ route.name }}</router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
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
</style>
