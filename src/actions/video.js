import request from 'Utils/request'
import { GET_VIDEO_LIST } from './actionType'
import api from '@/api/video'

const video = {
    getVideoList (feedChannelId) {
        return async dispatch => {
            let result = await request('GET', api.GET_VIDEO_LIST, {
                uuid: '902FA4E0EB7311EBB1ECD3EA973D97A857E4160FF28240D3BC98FBEBC31E7689',
                channelId: 4,
                feedChannelId,
                timestamp: Date.parse(new Date()),
                offset: 15
            })

            dispatch({
                type: GET_VIDEO_LIST,
                payload: result.data
            })
        }
    }
}

export default video