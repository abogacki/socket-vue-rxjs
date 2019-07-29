<template>
  <ViewBase>
    <template #header>
      <div class="subtitle heading">
        <a @click="$router.back()">
          <fa-icon icon="arrow-left" />&nbsp;
          Location list
        </a>
      </div>
    </template>

    <div v-if="weather">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <WeatherCurrent
            :temperature="weather.currently.temperature"
            :summary="weather.currently.summary"
          />
          <div v-if="weather.daily" class="tile is-parent">
            <WeatherForecast :summary="weather.daily.summary" :data="weather.daily.data" />
          </div>
        </div>
        <div class="tile is-parent">
          <WeatherDetails
            :name="weather.location.name"
            :latitude="weather.location.latitude"
            :longitude="weather.location.longitude"
            :pressure="weather.currently.pressure"
            :cloudCover="weather.currently.cloudCover"
            :humidity="weather.currently.humidity"
            :windSpeed="weather.currently.windSpeed"
          />
        </div>
      </div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from './_Animation'
import ConnectionService from '@/services/connection.service'
import { Weather } from '@/models/'
import WeatherDetails from '@/components/WeatherDetails'
import WeatherCurrent from '@/components/WeatherCurrent'
import WeatherForecast from '@/components/WeatherForecast'

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
    WeatherDetails,
    WeatherCurrent,
    WeatherForecast,
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
