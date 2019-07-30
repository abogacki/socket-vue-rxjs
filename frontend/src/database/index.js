import VuexORM from '@vuex-orm/core'
import { Weather, Location } from '@/models'

const database = new VuexORM.Database()

database.register(Location)
database.register(Weather)

export default database
