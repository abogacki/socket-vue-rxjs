<template>
  <article class="tile is-child notification is-warning">
    <p class="heading">Forecast for upcoming days</p>
    <br />
    <p>{{summary}}</p>
    <br />
    <div class="columns is-multiline">
      <div class="column is-3-touch has-text-centered" v-for="(day, i) in data" :key="day.time">
        <div>
          <p class="heading">{{dayNames[i]}}</p>
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
import moment from 'moment'

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
  computed: {
    dayNames() {
      return this.data.map(({ time }) => moment(time * 1000).format('dddd'))
    },
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
