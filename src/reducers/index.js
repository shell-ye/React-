import { combineReducers } from 'redux'
import home from './home'
import details from './details'
import search from './search'
import cinemas from './cinemas'
import video from './video'
import shortvideo from './shortvideo'

const rootReducer = combineReducers({
    home,
    details,
    search,
    cinemas,
    video,
    shortvideo
})

export default rootReducer