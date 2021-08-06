import request from 'Utils/request'
import api from '@/api/cinemas'
import { GET_CINEMAS_DETAILS } from './actionType'

const cinemas = {
    getCinemasDetails (cinemaId) {
        return async dispatch => {
            const result = await request('GET', api.GET_CINEMAS_DETAILS, {
                cinemaId,
                ci: 1,
                userid: '',
                channelId: 4
            })

            dispatch({
                type: GET_CINEMAS_DETAILS,
                payload: result.data
            })
        }
    }
}

export default cinemas