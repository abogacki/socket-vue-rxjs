<template>
  <div class="hello">Temperature in Florence is {{response}}</div>
</template>

<script>
import socketIOClient from 'socket.io-client'

export default {
  name: 'HelloWorld',
  data() {
    return { response: false }
  },
  created() {
    const endpoint = 'http://192.168.208.25:4001'
    const socket = socketIOClient(endpoint)
    const _component = this
    socket.on('FromAPI', function(data) {
      console.log(data)

      _component.response = data.currently.temperature
    })
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
