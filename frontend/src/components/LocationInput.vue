<template>
  <b-autocomplete
    :data="data"
    placeholder="e.g. Karków, Poland"
    field="title"
    size="is-small"
    open-on-focus
    :loading="isFetching"
    @typing="getAsyncData"
    @select="option => {$emit('select', option);}"
    :value="value"
  >
    <template slot-scope="props">
      <div class="media">
        <div class="media-content">
          {{ props.option.formatted }}
          <br />
          <small>
            Latitude:
            <b>{{ props.option.geometry.lat }}</b>,
            Longitude:
            <b>{{ props.option.geometry.lng }}</b>,
          </small>
        </div>
      </div>
    </template>
  </b-autocomplete>
</template>

<script>
import debounce from 'lodash/debounce'
import axios from 'axios'
import queryString from 'query-string'

export default {
  data() {
    return {
      data: [],
      isFetching: false,
      selected: '',
    }
  },
  props: {
    value: String,
  },
  watch: {
    value(v) {
      console.log(v)
    },
  },
  methods: {
    getAsyncData: debounce(async function(query) {
      if (!query.length) {
        this.data = []
        return
      }

      try {
        this.isFetching = true

        // refactor to nice service?
        const url = 'https://api.opencagedata.com/geocode/v1/json'
        const key = '3117f484e30440678b3e5da0e6c238e9'
        const response = await axios.get(url, {
          params: { q: query, key, pretty: 1 },
        })
        this.data = response.data.results
      } catch (error) {
        throw error
      } finally {
        this.isFetching = false
      }
    }, 500),
  },
}
</script>