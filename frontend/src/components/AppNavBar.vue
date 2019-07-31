<template>
  <nav class="navbar is-spaced is-shadowed" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a href="#/" class="navbar-item">
          <fa-icon icon="compass" style="margin-bottom:0.25em" />&nbsp;
          <span class="heading">Weather</span>
          <span class="heading has-text-weight-light">app</span>
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{'is-active':isActive}"
          @click="toggleActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <div class="navbar-item">
            <b-dropdown v-model="units">
              <button class="button is-small is-rounded" slot="trigger">
                <small>Units:</small>
                <span class="has-text-weight-light has-text-weight-bold is-uppercase">{{units}}</span>
              </button>
              <b-dropdown-item value="si" aria-role="listitem">
                <div class="media">
                  <div class="media-content">
                    <h3>SI</h3>
                    <small>International System of Units</small>
                  </div>
                </div>
              </b-dropdown-item>
              <b-dropdown-item value="us" aria-role="listitem">
                <div class="media">
                  <div class="media-content">
                    <h3>US</h3>
                    <small>United States Units</small>
                  </div>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { routes } from '@/router'
export default {
  data() {
    return {
      isActive: false,
      units: 'si',
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
