import VuexORM from '@vuex-orm/core'
import { Weather, Location } from '@/models'
import location from '@/store/modules/location'
import weather from '@/store/modules/weather'

const database = new VuexORM.Database()

database.register(Location, location)
database.register(Weather, weather)

export default database
