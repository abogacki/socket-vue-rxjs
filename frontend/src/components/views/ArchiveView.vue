<template>
  <ViewBase>
    <div class="box">
      <h1 ref="archive" class="header">Archive</h1>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from './_BaseView'
import anime from 'animejs/lib/anime.es'

export default {
  components: {
    ViewBase,
  },
  mounted() {
    anime({
      targets: '.header',
      opacity: [0, 1],
      translateX: [-200, 0],
      delay: 750,
    })
  },
}
</script>

<style>
</style>
