<template>
  <div ref="container" class="view container">
    <slot></slot>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es'

export default {
  mounted() {
    var anim = anime({
      targets: '.container',
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: anime.stagger(500),
      delay: 500,
    })
  },
}
</script>

<style scoped>
</style>
