import { GET_SEARCH_DATAS, SEARCH_MOVIE } from '@/actions/actionType'

const initState = {
    movies: null,
    cinemas: null
}

const search = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_SEARCH_DATAS:
            if ( action.payload.cinemas ) {
                newState.cinemas = action.payload.cinemas
            }
            if ( action.payload.movies ) {
                newState.movies = action.payload.movies
            }
            break

            case SEARCH_MOVIE:
                console.log(newState, action.payload)
                if ( action.payload.movies ) {
                    newState.movies.list = [...newState.movies.list, ...action.payload.movies]
                }
                break

        default:
            break
    }

    return newState
}

export default search