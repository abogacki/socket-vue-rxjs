import { Model } from '@vuex-orm/core'
import { Location } from './location'

export class Weather extends Model {
  static entity = 'weathers'

  static state() {
    return {
      isFetching: false,
    }
  }

  static fields() {
    return {
      id: this.increment(),
      location_id: this.attr(null),
      location: this.belongsTo(Location, 'location_id', 'id'),
      currently: this.attr({
        temperature: null,
        summary: null,
        pressure: null,
        cloudCover: null,
        humidity: null,
        windSpeed: null,
      }),
      daily: this.attr({
        data: [],
      }),
    }
  }
}
