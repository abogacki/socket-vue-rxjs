<template>
  <div id="app">
    <div class="hero is-primary is-bold is-fullheight">
      <div class="hero-head">
        <NavBar />
      </div>
      <div class="hero-body">
        <Content />
      </div>
      <div class="hero-foot">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Content,
    NavBar,
    Footer,
  },
}
</script>

<style>
</style>
