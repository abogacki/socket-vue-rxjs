<template>
  <div id="app">
    <div class="hero is-primary is-bold is-fullheight">
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
}
</script>

<style>
</style>
