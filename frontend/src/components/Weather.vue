<template>
  <ViewBase>
    <div v-if="weather">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <WeatherCurrent
            :location="weather.location.name"
            :temperature="weather.currently.temperature"
            :summary="weather.currently.summary"
          />
          <div v-if="weather.daily" class="tile is-parent">
            <WeatherForecast :summary="weather.daily.summary" :data="weather.daily.data" />
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
import WeatherForecast from '@/components/WeatherForecast'
import WeatherCurrent from '@/components/WeatherCurrent'

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
  data() {
    return {
      units: {
        temperature: '°C',
      },
    }
  },
  created() {
    if (this.weather) {
      const { latitude, longitude } = this.weather.location

      this.service = new ConnectionService(latitude, longitude)

      const mutator = ({ currently, daily }) => {
        Weather.update({ where: this.weather.id, data: { currently, daily } })
      }
      this.service.openConnection('FromAPI', mutator)
    }
  },
  beforeDestroy() {
    if (this.service) {
      this.service.closeConnection('FromAPI')
    }
  },
  components: {
    ViewBase,
    WeatherForecast,
    WeatherCurrent,
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
