<template>
  <div id="app">
    <div :class="theme.color" class="hero is-bold is-fullheight">
      <div class="hero-head">
        <AppNavBar />
      </div>
      <div class="hero-body">
        <AppContent />
      </div>
      <div class="hero-foot">
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar'
import AppContent from '@/components/AppContent'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'app',
  components: {
    AppContent,
    AppNavBar,
    AppFooter,
  },
  computed: {
    theme() {
      return { color: 'is-warning' }
    },
  },
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #4099ff;
$primary-invert: findColorInvert($primary);
$secondary: #f3e367;
$secondary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black,
  ),
  'black': (
    $black,
    $white,
  ),
  'light': (
    $light,
    $light-invert,
  ),
  'dark': (
    $dark,
    $dark-invert,
  ),
  'primary': (
    $primary,
    $primary-invert,
  ),
  'info': (
    $info,
    $info-invert,
  ),
  'success': (
    $success,
    $success-invert,
  ),
  'warning': (
    $warning,
    $warning-invert,
  ),
  'danger': (
    $danger,
    $danger-invert,
  ),
  'twitter': (
    $twitter,
    $twitter-invert,
  ),
  'secondary': (
    $secondary,
    $secondary-invert,
  ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
