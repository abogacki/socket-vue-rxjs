<template>
  <article class="tile is-child">
    <p class="heading">Forecast for upcoming days</p>
    <br />
    <p>{{summary}}</p>
    <br />
    <div class="level">
      <div class="level-item has-text-centered" v-for="day in data" :key="day.time">
        <div>
          <p class="heading">{{new Date(day.time * 1000).toLocaleDateString()}}</p>
          <br />
          <figure class="image">
            <fa-icon :icon="getIcon(day.icon)" size="3x" />
          </figure>
          <br />
          <p class="has-text-blue">{{ day.temperatureLow }} {{units.temperature}}</p>
          <p class="has-text-danger">{{ day.temperatureHigh }} {{units.temperature}}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { translateIcon } from '@/services/icon.service'
export default {
  data() {
    return {
      units: {
        temperature: '°C',
      },
    }
  },
  props: {
    data: Array,
    summary: String,
  },
  methods: {
    getIcon(icon) {
      return translateIcon(icon)
    },
  },
}
</script>

<style>
</style>
