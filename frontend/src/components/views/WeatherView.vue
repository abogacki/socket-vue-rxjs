<template>
  <div v-if="data">
    <div>Temperature in Florence is {{data.currently.temperature}}</div>
    <slot name="alerts" :data="data">{{data.currently.latitude}}</slot>
  </div>
</template>

<script>
import socketIOClient from 'socket.io-client'

export default {
  name: 'Weather',
  data() {
    return { data: false }
  },
  created() {
    const endpoint = 'http://192.168.208.25:4001'
    const socket = socketIOClient(endpoint)
    const _component = this
    console.log(this)
    socket.on('FromAPI', data => {
      console.log(data)
      _component.data = data
    })
  },
}
</script>

<style scoped>
</style>
