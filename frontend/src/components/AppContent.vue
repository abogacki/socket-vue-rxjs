<template>
  <div class="container">
    <AppContentAnimation>
      <router-view></router-view>
    </AppContentAnimation>
  </div>
</template>

<script>
import AppContentAnimation from './AppContentAnimation'

export default {
  components: {
    AppContentAnimation,
  },
}
</script>

<style>
</style>
