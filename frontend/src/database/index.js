import VuexORM from '@vuex-orm/core'
import * as models from '@/models'
import location from '@/store/modules/location'
import weather from '@/store/modules/weather'

const database = new VuexORM.Database()

database.register(models.Location, location)
database.register(models.Weather, weather)

export default database
