import request from '@/utils/request'
import { GET_HOT_MOVIES, PUSH_HOT_MOVIES, GET_COMMING_MOVIES, PUSH_COMMING_MOVIES } from "./actionType";
import api from '@/api/home'

const home = {
    // 获取热门电影
    getHotMovies () {
        return async dispatch => {
            // let result = await getHotMovies()
            let result = await request('GET', api.GET_HOT_MOVIES, {
                token: '',
                optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
                optimus_risk_level: 71,
                optimus_code: 10
            })
            
            dispatch({
                type: GET_HOT_MOVIES,
                payload: result.data
            })
        }
    },

    // 获取更多热门电影
    pushHotMovies ( movieIds ) {
        return async dispatch => {
            // let result = await pushHotMovies( ids )
            let result = await request('GET', api.PUSH_HOT_MOVIES, {
                token: '',
                movieIds,
                optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
                optimus_risk_level: 71,
                optimus_code: 10
            })

            dispatch({
                type: PUSH_HOT_MOVIES,
                payload: result.data
            })
        }
    },

    // 获取即将上映电影
    getCommingMovies () {
        return async dispatch => {
            // let result = await getCommingMovies()
            let result = await request('GET', api.GET_COMMING_MOVIES, {
                token: '',
                ci: 83,
                limit: 10,
                optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
                optimus_risk_level: 71,
                optimus_code: 10
            })
            
            dispatch({
                type: GET_COMMING_MOVIES,
                payload: result.data
            })
        }
    },

    // 获取更多即将上映电影
    pushCommingMovies (movieIds) {
        return async dispatch => {
            // let result = await pushCommingMovies(ids)
            let result = await request('GET', api.PUSH_COMMING_MOVIES, {
                token: '',
                ci: 83,
                limit: 10,
                movieIds,
                optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
                optimus_risk_level: 71,
                optimus_code: 10
            })

            dispatch({
                type: PUSH_COMMING_MOVIES,
                payload: result.data
            })
        }
    }
}

export default home