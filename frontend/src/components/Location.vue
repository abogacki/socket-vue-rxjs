<template>
  <Animation>
    <div class="box has-background-primary is-transparent has-text-white">
      <LocationForm />
    </div>
    <LocationList />
  </Animation>
</template>

<script>
import Animation from './_Animation'
import LocationForm from './LocationForm'
import LocationList from './LocationList'

export default {
  components: {
    Animation,
    LocationForm,
    LocationList,
  },
}
</script>

<style>
.is-transparent {
  background: transparent;
}
</style>
