<template>
  <div class="columns is-multiline">
    <div
      class="column is-3-desktop is-4-tablet has-text-centered"
      v-for="location in locations"
      :key="location.id"
    >
      <router-link :to="`/weather/${location.id}`" class="box notification is-warning">
        <a @click="destroy(location, $event)" class="delete"></a>
        <br />
        <figure>
          <fa-icon icon="map-marker-alt" size="6x" />
        </figure>
        <br />
        <p class="title heading">{{ location.name }}</p>
        <hr />
        <div class="buttons">
          <div class="button is-small is-fullwidth is-warning is-rounded is-rounded">
            <span>latitude:</span>
            <small>{{ location.latitude }}</small>
          </div>

          <div class="button is-small is-fullwidth is-warning is-rounded is-rounded">
            <span>longitude:</span>
            <small>{{ location.longitude }}</small>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Location } from '@/models'

export default {
  computed: {
    locations() {
      return Location.all()
    },
  },
  methods: {
    async destroy(location, e) {
      e.preventDefault()
      console.log(Location.delete(location.id))

      await location.$delete()
    },
  },
}
</script>

<style>
</style>
