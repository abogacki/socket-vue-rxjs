<template>
  <ViewBase>
    <div v-if="location">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="heading">Temperature for {{location.name}}</p>
                <div class="content has-text-centered">
                  <figure class="image">
                    <fa-icon size="4x" icon="temperature-high" />
                  </figure>
                  <strong class="is-size-3">
                    {{location.weather.currently.temperature}}
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
                <p
                  class="has-text-centered has-text-weight-bold"
                >{{location.weather.currently.summary}}</p>
              </article>
            </div>
          </div>

          <div v-if="location.weather.daily" class="tile is-parent">
            <article class="tile is-child">
              <p class="heading">Forecast for upcoming days</p>
              <br />
              <div class="level">
                <div
                  class="level-item has-text-centered"
                  v-for="day in location.weather.daily"
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
              <p class="subtitle">{{location.latitude}}, {{location.longitude}}</p>
              <div class="content">
                <p>
                  <span class="heading">pressure:</span>
                  {{location.weather.currently.pressure}} hPa
                </p>
                <p>
                  <span class="heading">cloud cover:</span>
                  {{location.weather.currently.cloudCover * 100}} %
                </p>

                <p>
                  <span class="heading">humidity:</span>
                  {{location.weather.currently.humidity * 100}} %
                </p>

                <p>
                  <span class="heading">wind speed:</span>
                  {{location.weather.currently.windSpeed}}
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
import WeatherService from '@/services/connection.service.js'
import ViewBase from './_Animation'
import { Weather, Location } from '@/models/'

export default {
  name: 'Weather',
  computed: {
    location_id() {
      return this.$route.params.location_id
    },
    location() {
      return Location.query()
        .with('weather')
        .get()[0]
    },
    weather() {
      return Weather.query()
        .where('location_id', this.location_id)
        .get()
    },
  },
  watch: {
    location(newLoc) {
      console.log(newLoc, 'newLoc')
    },
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
