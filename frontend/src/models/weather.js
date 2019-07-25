import { Model } from '@vuex-orm/core'
import { Location } from './location'

export class Weather extends Model {
  static entity = 'weathers'

  static fields() {
    return {
      id: this.increment(),
      location_id: this.attr(null),
      currently: this.attr({}),
      daily: this.attr([]),
      location: this.hasOne(Location, 'id', 'location_id'),
    }
  }
}
