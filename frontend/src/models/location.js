import { Model } from '@vuex-orm/core'

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
