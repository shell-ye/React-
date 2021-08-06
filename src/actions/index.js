import home from './home'
import details from './details'
import search from './search'
import cinemas from './cinemas'
import video from './video'
import shortvideo from './shortvideo'

const actions = module => {
    switch (module) {
        case 'home':
            return home
            break

        case 'details':
            return details
            break

        case 'search':
            return search
            break

        case 'cinemas':
            return cinemas
            break

        case 'video':
            return video
            break

        case 'shortvideo':
            return shortvideo
            break

        default:
            break
    }
}

export default actions