import { GET_VIDEO_LIST } from "@/actions/actionType"

const initState = {
    list: null
}

const video = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_VIDEO_LIST:
            if ( newState.list ) {
                newState.list.feeds = [...newState.list.feeds, ...action.payload.data.feeds]
            } else {
                newState.list = action.payload.data
            }
            break

        default:
            break
    }

    return newState
}

export default video