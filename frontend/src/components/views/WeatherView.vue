<template>
  <ViewBase>
    <div v-if="currentByPosition">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="heading">Temperature</p>
                <div class="content has-text-centered">
                  <figure class="image">
                    <fa-icon size="4x" icon="temperature-high" />
                  </figure>
                  <strong class="is-size-3">
                    {{currentByPosition.temperature}}
                    <small>°F</small>
                  </strong>
                </div>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="heading">Today is...</p>
                <figure class="image has-text-centered">
                  <fa-icon size="6x" icon="sun" />
                </figure>
                <br />
                <p class="has-text-centered has-text-weight-bold">{{currentByPosition.summary}}</p>
              </article>
            </div>
          </div>

          <div v-if="dailyByPosition" class="tile is-parent">
            <article class="tile is-child">
              <p class="heading">Forecast for upcoming days</p>
              <br />
              <div class="level">
                <div
                  class="level-item has-text-centered"
                  v-for="day in dailyByPosition.data"
                  :key="day.time"
                >
                  <div>
                    <p class="heading">{{new Date(day.time * 1000).toLocaleDateString()}}</p>
                    <br />
                    <figure class="image">
                      <fa-icon icon="sun" size="3x" />
                    </figure>
                    <br />
                    <p class="has-text-blue">{{ day.temperatureLow }} °F</p>
                    <p class="has-text-danger">{{ day.temperatureHigh }} °F</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="heading">current weather details for</p>
              <p class="subtitle">{{latitude}}, {{longitude}}</p>
              <div class="content">
                <p>
                  <span class="heading">pressure:</span>
                  {{currentByPosition.pressure}} hPa
                </p>
                <p>
                  <span class="heading">cloud cover:</span>
                  {{currentByPosition.cloudCover * 100}} %
                </p>

                <p>
                  <span class="heading">humidity:</span>
                  {{currentByPosition.humidity * 100}} %
                </p>

                <p>
                  <span class="heading">wind speed:</span>
                  {{currentByPosition.windSpeed}}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import WeatherService from '@/services/weather.service.js'
import Weather from '@/classes/weather'
import ViewBase from './_BaseView'
import { mapActions, mapGetters } from 'vuex'
import {
  GET_CURRENT_BY_POSITION,
  GET_DAILY_BY_POSITION,
  OPEN_CONNECTION,
  CLOSE_CONNECTION,
} from '@/store/modules/weather'

export default {
  name: 'Weather',
  computed: {
    currentByPosition() {
      const { latitude, longitude } = this
      return this.$store.getters[GET_CURRENT_BY_POSITION]({
        latitude,
        longitude,
      })
    },
    dailyByPosition() {
      const { latitude, longitude } = this
      return this.$store.getters[GET_DAILY_BY_POSITION]({ latitude, longitude })
    },
  },
  data() {
    return {
      latitude: 43.7695,
      longitude: 11.2558,
    }
  },
  created() {
    this[OPEN_CONNECTION](this.latitude, this.longitude)
  },
  methods: mapActions([OPEN_CONNECTION]),
  components: {
    ViewBase,
  },
}
</script>

<style scoped>
.is-vcentered {
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
