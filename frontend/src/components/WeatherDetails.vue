<template>
  <article class="tile is-child notification is-success">
    <div class="content">
      <p class="heading">current weather details for</p>
      <p class="is-uppercase">
        <strong>{{name}}</strong>
      </p>
      <p class="has-text-weight-light is-size-7">(last update {{lastUpdate}})</p>
      <p class="subtitle has-text-weight-light">
        {{latitude}}
        |
        {{longitude}}
      </p>
      <div class="content">
        <p>
          <span class="heading">pressure:</span>
          {{pressure}} {{units.pressure}}
        </p>
        <p>
          <span class="heading">cloud cover:</span>
          {{cloudCover * 100}} %
        </p>

        <p>
          <span class="heading">humidity:</span>
          {{humidity * 100}} %
        </p>

        <p>
          <span class="heading">wind speed:</span>
          {{windSpeed}} {{units.speed}}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    latitude: [Number, String],
    longitude: [Number, String],
    name: String,
    pressure: Number,
    cloudCover: Number,
    humidity: Number,
    windSpeed: Number,
    time: Number,
  },
  data() {
    return {
      units: {
        pressure: 'hPa',
        speed: 'km/h',
      },
    }
  },
  computed: {
    lastUpdate() {
      return moment(this.time * 1000).fromNow()
    },
  },
}
</script>

<style>
</style>
