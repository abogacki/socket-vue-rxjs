<template>
  <ViewBase>
    <template #header>
      <div class="subtitle heading">
        <router-link tag="a" to="/">
          <fa-icon icon="arrow-left" />&nbsp;
          Location list
        </router-link>
      </div>
    </template>

    <div v-if="weather">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <WeatherCurrent
            v-bind="weather.currently"
          />
          <div v-if="weather.daily" class="tile is-parent">
            <WeatherForecast v-bind="weather.daily" />
          </div>
        </div>
        <div class="tile is-parent">
          <WeatherDetails v-bind="{...weather.currently, ...weather.location}" />
        </div>
      </div>
    </div>
    <div class="notification is-primary" v-else>
      <h3 class="title">Location Not found</h3>
      <h4 class="subtitle">Location with such id is not yet added. Would you like to create one?</h4>
      <router-link tag="a" class="button is-primary" to="/">Go to location add form</router-link>
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
