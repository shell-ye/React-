import { GET_MOVIE_DETAILS, GET_SHOW_DATE, CHANGE_SHOW_DATE, GET_MOVIE_CINEMA } from '@/actions/actionType'

const initState = {
    movieDetails: null,
    showDate: null,
    activeDate: null,
    cinema: null
}

const details = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_MOVIE_DETAILS:
            newState.movieDetails = action.payload.data.movie
            break

        case GET_SHOW_DATE:
            if ( action.payload.data && action.payload.data.data ) {
                newState.showDate = action.payload.date.data.dates
                newState.activeDate = action.payload.date.data.dates[0].date
            }
            if ( action.payload.cinema !== [] ) {
                newState.cinema = action.payload.cinema.data
            }
            break

        case CHANGE_SHOW_DATE:
            newState.activeDate = action.payload.date
            newState.cinema = action.payload.cinema.data
            break

        case GET_MOVIE_CINEMA:
            newState.cinema = action.payload
            break

        default:
            break
    }

    return newState
}

export default details