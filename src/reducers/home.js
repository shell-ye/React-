import { GET_HOT_MOVIES, PUSH_HOT_MOVIES, GET_COMMING_MOVIES, PUSH_COMMING_MOVIES } from "@/actions/actionType"

const initState = {
    hotMovies: null,
    commingMovies: null
}

const home = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_HOT_MOVIES:
            newState.hotMovies = action.payload
            break

        case PUSH_HOT_MOVIES:
            newState.hotMovies.movieList.push(...action.payload.coming)
            break

        case GET_COMMING_MOVIES:
            newState.commingMovies = action.payload
            break

        case PUSH_COMMING_MOVIES:
            newState.commingMovies.coming.push(...action.payload.coming)
            break

        default:
            break
    }

    return newState
}

export default home