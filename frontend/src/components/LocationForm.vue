<template>
  <form class="form" @submit="onSubmit($event)">
    <b-field>
      <LocationInput />
    </b-field>
    <b-field grouped>
      <b-field expanded custom-class label="City">
        <b-input
          size="is-small"
          v-model="form.name"
          placeholder="City name, eg. Poznan, Warszawa"
          type="text"
          aria-required="true"
        />
      </b-field>

      <b-field custom-class label="Latitude">
        <b-input
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
        name: 'Poznań',
        latitude: 52.40637,
        longitude: 16.92516,
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

      Weather.insert({
        data: { location_id: location.id },
      })

      this.form = { name: '', longitude: '', latitude: '' }
    },
  },
  components: {
    LocationInput,
  },
}
</script>

<style>
</style>
