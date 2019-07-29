<template>
  <div class="tile">
    <div class="tile is-parent is-vertical">
      <article class="tile is-child notification is-primary">
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
      <article class="tile is-child notification is-info">
        <p class="heading">Today is...</p>
        <figure class="image has-text-centered">
          <fa-icon size="6x" icon="sun" />
        </figure>
        <br />
        <div class="content">
          <strong class="has-text-centered">{{summary}}</strong>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: String,
    temperature: Number,
    summary: String,
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
