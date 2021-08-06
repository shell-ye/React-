import { GET_CINEMAS_DETAILS } from '@/actions/actionType'

const initState = {
    details: null
}

const cinemas = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_CINEMAS_DETAILS:
            newState.details = action.payload.data
            break

        default:
            break
    }

    return newState
}

export default cinemas