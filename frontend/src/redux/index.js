import { combineReducers } from 'redux'
import albums from './albums'
import bands from './bands'
import genres from './genres'

export default combineReducers({ albums, bands, genres })
