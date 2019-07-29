<template>
  <div ref="container" class="view container">
    <slot name="header" class="header"></slot>
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

    var headerAnim = anime({
      targets: 'header',
      opacity: [0, 1],
      delay: 1500,
      translateX: [-100, 0],
      duration: anime.stagger(500),
    })
  },
}
</script>

<style scoped>
</style>
