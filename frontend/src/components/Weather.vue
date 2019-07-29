<template>
  <ViewBase>
    <div v-if="weather">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="heading">Temperature for {{weather.location.name}}</p>
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

          <div v-if="weather.daily" class="tile is-parent">
            <article class="tile is-child">
              <p class="heading">Forecast for upcoming days</p>
              <br />
              <p>{{weather.daily.summary}}</p>
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
              <p class="subtitle">{{weather.location.latitude}}, {{weather.location.longitude}}</p>
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
  </ViewBase>
</template>

<script>
import WeatherService from '@/services/connection.service.js'
import ViewBase from './_Animation'
import { Weather } from '@/models/'
import ConnectionService from '@/services/connection.service'

export default {
  name: 'Weather',
  computed: {
    location_id() {
      return parseInt(this.$route.params.location_id)
    },
    weather() {
      return Weather.query()
        .where('location_id', this.location_id)
        .with('location')
        .first()
    },
  },
  created() {
    const { latitude, longitude } = this.weather.location

    this.service = new ConnectionService(latitude, longitude)

    const mutator = ({ currently, daily }) => {
      console.log(this.weather.$update)
      console.log(daily)

      Weather.update({ where: this.weather.id, data: { currently, daily } })
    }

    this.service.openConnection('FromAPI', mutator)
  },
  beforeDestroy() {
    this.service.closeConnection('FromAPI')
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
