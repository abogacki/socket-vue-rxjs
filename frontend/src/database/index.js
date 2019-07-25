import VuexORM from '@vuex-orm/core'
import * as models from '@/models'

const database = new VuexORM.Database()

database.register(models.Location)
database.register(models.Weather)

export default database
