import BASE_URL from './config'

const api = {
    GET_HOT_MOVIES: `${ BASE_URL }/ajax/movieOnInfoList`,
    PUSH_HOT_MOVIES: `${ BASE_URL }/ajax/moreComingList`,
    GET_COMMING_MOVIES: `${ BASE_URL }/ajax/comingList`,
    PUSH_COMMING_MOVIES: `${ BASE_URL }/ajax/moreComingList`
}

export default api