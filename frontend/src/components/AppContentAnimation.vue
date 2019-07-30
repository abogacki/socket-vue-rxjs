<template>
  <transition appear @appear="appear" @enter="enter" @leave="leave" mode="out-in" :css="false">
    <slot></slot>
  </transition>
</template>

<script>
import anime from 'animejs/lib/anime.es'

export default {
  methods: {
    enter(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 150,
        easing: 'cubicBezier(.5, .05, .1, .3)',
        complete: anim => {
          done()
        },
      })
    },
    appear(el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 150,
        easing: 'easeInCubic',
        complete: anim => {
          done()
        },
      })
    },
    leave(el, done) {
      anime({
        targets: el,
        opacity: 0,
        duration: 150,
        easing: 'easeOutCubic',
        complete: anim => {
          if (anim.completed) {
            done()
          }
        },
      })
    },
  },
}
</script>

<style>
</style>
