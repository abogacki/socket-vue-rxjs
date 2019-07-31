<template>
  <div>
    <div>
      <transition appear @appear="headerEnter" @enter="headerEnter" mode="out-in" :css="false">
        <div class="subtitle heading" key="heading">
          <router-link tag="a" to="/">
            <fa-icon icon="arrow-left" />&nbsp;
            Location list
          </router-link>
        </div>
      </transition>
      <div v-if="weather">
        <transition appear @appear="tilesEnter" @enter="tilesEnter" mode="out-in" :css="false">
          <div ref="mainTile" class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <WeatherCurrent v-bind="weather.currently" />
              <div v-if="weather.daily" class="tile is-parent">
                <WeatherForecast v-bind="weather.daily" />
              </div>
            </div>
            <div class="tile is-parent">
              <WeatherDetails
                v-bind="{...weather.currently, name: weather.location.name, latitude: weather.location.latitude, longitude: weather.location.longitude, }"
              />
            </div>
          </div>
        </transition>
      </div>
      <div v-else class="notification is-warning">
        <h3 class="title">Location Not found</h3>
        <h4 class="subtitle">Location with such id is not yet added. Would you like to create one?</h4>
        <router-link tag="a" class="button is-warning is-small" to="/">Go to location add form</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ConnectionService from '@/services/connection.service'
import { Weather } from '@/models/'
import WeatherDetails from '@/components/WeatherDetails'
import WeatherCurrent from '@/components/WeatherCurrent'
import WeatherForecast from '@/components/WeatherForecast'
import anime from 'animejs/lib/anime.es'

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
    tiles() {
      return this.$refs.mainTile.querySelectorAll('.tile')
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
      console.log(Object.keys(this.weather.location))

      const { latitude, longitude } = this.weather.location

      this.service = new ConnectionService()
      this.service.emitEvent('GetWeather', { latitude, longitude })

      const mutator = ({ currently, daily }) => {
        console.log(currently, daily)

        Weather.update({ where: this.weather.id, data: { currently, daily } })
      }

      this.service.openConnection('WeatherFromAPI', mutator)
    }
  },
  beforeDestroy() {
    if (this.service) {
      this.service.closeConnection('WeatherFromAPI')
    }
  },
  methods: {
    headerEnter(el, done) {
      anime({
        targets: el,
        delay: anime.stagger(250),
        duration: 200,
        opacity: [0, 1],
        translateX: [100, 0],
        easing: 'easeInCubic',
        complete: () => done(),
      })
    },
    tilesEnter(el, done) {
      anime({
        targets: this.tiles,
        delay: anime.stagger(75),
        duration: 150,
        opacity: [0, 1],
        easing: 'easeInCubic',
        complete: () => done(),
      })
    },
  },
  components: {
    WeatherDetails,
    WeatherCurrent,
    WeatherForecast,
  },
}
</script>

<style scoped>
</style>
