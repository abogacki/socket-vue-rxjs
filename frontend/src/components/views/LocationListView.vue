<template>
  <BaseView>
    <div class="box has-background-primary is-transparent has-text-white">
      <form class="form" @submit="addLocation($event)">
        <b-field grouped>
          <b-field expanded label="City">
            <b-input
              size="is-small"
              v-model="newLocation.name"
              placeholder="City name, eg. Poznan, Warszawa"
              type="text"
              aria-required="true"
            />
          </b-field>

          <b-field label="Latitude">
            <b-input
              size="is-small"
              placeholder="46.33525"
              min="-90"
              max="90"
              v-model="newLocation.latitude"
              type="number"
              step=".00001"
            />
          </b-field>

          <b-field label="Longitude">
            <b-input
              size="is-small"
              placeholder="23.56735"
              v-model="newLocation.longitude"
              type="number"
              step=".00001"
              min="-180"
              max="180"
            />
          </b-field>
          <b-field label="submit">
            <button
              type="submit"
              class="button is-primary is-inverted is-outlined is-rounded is-small"
            >Add</button>
          </b-field>
        </b-field>
      </form>
    </div>
    <div class="columns is-multiline">
      <div
        class="column is-3-desktop is-4-tablet has-text-centered"
        v-for="location in locations"
        :key="location.id"
      >
        <router-link
          :to="`/weather/${location.latitude},${location.longitude}`"
          class="box has-background-primary"
        >
          <a
            @click="destroyLocation([location.latitude, location.longitude], $event)"
            class="delete"
          ></a>
          <p class="title heading">{{ location.name }}</p>
          <hr />
          <div class="buttons">
            <div class="button is-small is-fullwidth is-primary is-rounded is-rounded">
              <span>latitude:</span>
              <small>{{ location.latitude }}</small>
            </div>

            <div class="button is-small is-fullwidth is-primary is-rounded is-rounded">
              <span>longitude:</span>
              <small>{{ location.longitude }}</small>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </BaseView>
</template>

<script>
import { Location } from '@/models/location'
import { Weather } from '@/models/weather'
import data from '@/mocks/apiResponse.json'
import BaseView from './_BaseView'

export default {
  data() {
    return {
      newLocation: {
        name: 'Kilimandżaro',
        latitude: 33.456,
        longitude: 150.31,
      },
      locationSelected: {},
    }
  },
  created() {
    const { latitude, longitude, currently, daily } = data
    const locations = [
      { name: 'Florence', latitude: 43.76956, longitude: 11.25581 },
      { name: 'Poznan', latitude: 52.406376, longitude: 16.925167 },
      { name: 'Warszawa', latitude: 52.22967, longitude: 21.01223 },
    ]

    Location.insert({ data: locations })
  },
  computed: {
    locations() {
      return Location.all()
    },
    filteredSuggestedLocations() {
      return this.suggestedLocations.filter(option =>
        option.name
          .toString()
          .toLowerCase()
          .includes(this.locationInput.toLowerCase())
      )
    },
  },
  methods: {
    addLocation(event) {
      Location.insert({ data: this.newLocation })
      this.newLocation = { name: '', longitude: '', latitude: '' }
    },
    destroyLocation([latitude, longitude], event) {
      event.preventDefault()
      const id = `${latitude}_${longitude}`
      Location.delete(id)
    },
  },
  components: {
    BaseView,
  },
}
</script>

<style>
.is-transparent {
  background: transparent;
}
</style>
