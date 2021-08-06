import request from 'Utils/request'
import api from '@/api/shortvideo'
import { GET_SHORT_VIDEO_LIST } from './actionType'

const shortvideo = {
    getShortVideoList () {
        return async dispatch => {
            const result = await request('GET', api.GET_SHORT_VIDEO_LIST, {
                uuid: '902FA4E0EB7311EBB1ECD3EA973D97A857E4160FF28240D3BC98FBEBC31E7689',
                channelId: 4,
                feedChannelId: 105,
                timestamp: Date.parse(new Date()),
                offset: 10
            })

            dispatch({
                type: GET_SHORT_VIDEO_LIST,
                payload: result.data
            })
        }
    }
}

export default shortvideo