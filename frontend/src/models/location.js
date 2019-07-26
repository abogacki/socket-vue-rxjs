import { Model } from '@vuex-orm/core'
import uuid from 'uuid/v1'

export class Location extends Model {
  static entity = 'locations'

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(''),
      latitude: this.attr(null),
      longitude: this.attr(null),
      weather: this.hasOne(Weather, 'location_id'),
    }
  }
}

export class Weather extends Model {
  static entity = 'weathers'

  static fields() {
    return {
      id: this.increment(),
      location_id: this.attr(null),
      currently: this.attr({
        temperature: null,
        summary: null,
        pressure: null,
        cloudCover: null,
        humidity: null,
        windSpeed: null,
      }),
      daily: this.attr({}),
    }
  }
}
