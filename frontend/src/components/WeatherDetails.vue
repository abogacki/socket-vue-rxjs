<template>
  <article class="tile is-child notification is-success">
    <div class="content">
      <p class="heading">
        current weather details for
        <strong>{{name}}</strong>
        <fa-icon icon="map-marker-alt" />
      </p>
      <p class="subtitle has-text-weight-light">
        {{latitude}}
        |
        {{longitude}}
      </p>
      <div class="content">
        <p>
          <span class="heading">pressure:</span>
          {{pressure}} {{units.pressure}}
        </p>
        <p>
          <span class="heading">cloud cover:</span>
          {{cloudCover * 100}} %
        </p>

        <p>
          <span class="heading">humidity:</span>
          {{humidity * 100}} %
        </p>

        <p>
          <span class="heading">wind speed:</span>
          {{windSpeed}}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    latitude: Number,
    longitude: Number,
    name: String,
    pressure: Number,
    cloudCover: Number,
    humidity: Number,
    windSpeed: Number,
  },
  data() {
    return {
      units: {
        pressure: 'hPa',
      },
    }
  },
}
</script>

<style>
</style>
