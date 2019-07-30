<template>
  <div class="container">
    <AppContentAnimation>
      <router-view></router-view>
    </AppContentAnimation>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es'
import uuid from 'uuid/v1'
import AppContentAnimation from './AppContentAnimation'

export default {
  data() {
    return {
      customId: '',
    }
  },
  components: {
    AppContentAnimation,
  },
}
</script>

<style>
</style>
