<template>
  <ViewBase>
    <div v-if="weather">
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
                    {{weather.currently.temperature}}
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
                <p class="has-text-centered has-text-weight-bold">{{weather.currently.summary}}</p>
              </article>
            </div>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child">
              <p class="heading">Forecast for upcoming days</p>
              <br />
              <div class="level">
                <div
                  class="level-item has-text-centered"
                  v-for="day in weather.daily.data"
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
              <p class="subtitle">{{weather.latitude}}, {{weather.longitude}}</p>
              <div class="content">
                <p>
                  <span class="heading">pressure:</span>
                  {{weather.currently.pressure}} hPa
                </p>
                <p>
                  <span class="heading">cloud cover:</span>
                  {{weather.currently.cloudCover * 100}} %
                </p>

                <p>
                  <span class="heading">humidity:</span>
                  {{weather.currently.humidity * 100}} %
                </p>

                <p>
                  <span class="heading">wind speed:</span>
                  {{weather.currently.windSpeed}}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </ViewBase>
</template>

<script>
import WeatherService from '@/_services/weather.service.js'
import Weather from '@/classes/weather'
import ViewBase from './_BaseView'

export default {
  name: 'Weather',
  data() {
    return { weather: false }
  },
  created() {
    const endpoint = 'http://192.168.208.25:4001'
    this.weatherService = new WeatherService(endpoint)
    this.weatherService.addConnection('FromAPI', this.onDataReceive)
  },
  methods: {
    onDataReceive(data) {
      this.weather = data
    },
  },
  beforeDestroy() {
    this.weatherService.closeConnection()
  },
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
