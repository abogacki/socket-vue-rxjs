import { Model } from '@vuex-orm/core'
import { Weather } from './weather'

export class Location extends Model {
  static entity = 'locations'

  static primaryKey = ['latitude', 'longitude']

  static fields() {
    return {
      id: this.increment(),
      weather_id: this.attr(null),
      name: this.attr(''),
      latitude: this.attr(null),
      longitude: this.attr(null),
    }
  }
}
