<template>
  <div>
    <div class="box notification is-warning is-transparent">
      <LocationForm />
    </div>
    <LocationList />
  </div>
</template>

<script>
import LocationForm from './LocationForm'
import LocationList from './LocationList'

export default {
  components: {
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
