<template>
  <div class="tile">
    <div class="tile is-parent is-vertical">
      <article class="tile is-child notification is-warning">
        <p class="heading">
          <span class="has-text-weight-light">Temperature:</span>
        </p>
        <div class="content has-text-centered">
          <figure class="image">
            <fa-icon size="6x" icon="temperature-high" />
          </figure>
          <strong class="is-size-5">
            {{temperature}}
            <small>{{units.temperature}}</small>
          </strong>
        </div>
      </article>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child notification is-warning">
        <p class="heading">Today is...</p>
        <div class="content has-text-centered">
          <figure class="image">
            <fa-icon size="6x" :icon="translatedIcon" />
          </figure>
          <strong class="is-size-5">{{summary}}</strong>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { translateIcon } from '@/services/icon.service'

export default {
  props: {
    location: String,
    temperature: Number,
    summary: String,
    icon: String,
    time: Number,
  },
  computed: {
    translatedIcon() {
      return translateIcon(this.icon)
    },
  },
  data() {
    return {
      units: {
        temperature: '°C',
      },
    }
  },
}
</script>

<style>
</style>
