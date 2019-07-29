import { Model } from '@vuex-orm/core'
import { Weather } from '@/models'

export class Location extends Model {
  static entity = 'locations'

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(''),
      latitude: this.attr(null),
      longitude: this.attr(null),
    }
  }
}
