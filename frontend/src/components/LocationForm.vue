<template>
  <form class="form" @submit="onSubmit($event)">
    <b-field grouped>
      <b-field expanded custom-class label="City">
        <LocationInput @select="onSelect($event)" :value="form.name" />
      </b-field>

      <b-field custom-class label="Latitude">
        <b-input
          readonly
          size="is-small"
          placeholder="46.33525"
          min="-90"
          max="90"
          v-model="form.latitude"
          type="number"
          step=".00001"
        />
      </b-field>

      <b-field custom-class label="Longitude">
        <b-input
          readonly
          size="is-small"
          placeholder="23.56735"
          v-model="form.longitude"
          type="number"
          step=".00001"
          min="-180"
          max="180"
        />
      </b-field>
      <b-field custom-class label="Submit">
        <button
          type="submit"
          class="button is-warning is-inverted is-outlined is-rounded is-small"
        >Add</button>
      </b-field>
    </b-field>
  </form>
</template>

<script>
import { Location, Weather } from '@/models'
import LocationInput from '@/components/LocationInput'

export default {
  data() {
    return {
      form: {
        name: '',
        latitude: null,
        longitude: null,
      },
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()

      const { latitude, longitude, name } = this.form

      const res = await Location.insert({
        data: { latitude, longitude, name },
      })
      const location = res.locations[0]
      console.log(location)

      const weather = await Weather.insert({
        data: { location_id: location.id },
      })

      this.fillForm()
    },
    onSelect(option) {
      const latitude = Math.round(option.geometry.lat * 100000) / 100000
      const longitude = Math.round(option.geometry.lng * 100000) / 100000
      const name = option.formatted
      this.fillForm({ name, latitude, longitude })
    },

    fillForm({ latitude = '', longitude = '', name = '' } = {}) {
      this.form = { latitude, longitude, name }
    },
  },
  components: {
    LocationInput,
  },
}
</script>

<style>
</style>
