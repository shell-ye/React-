import request from 'Utils/request'
import api from '@/api/search'
import { GET_SEARCH_DATAS, SEARCH_MOVIE } from '@/actions/actionType'

let timer = ''

const search = {
    getSearchDatas (kw) {
        return dispatch => {
            clearTimeout(timer)
            timer = setTimeout(async () => {
                const result = await request('GET', api.GET_SEARCH_DATAS, {
                    kw,
                    cityId: 83,
                    stype: -1
                })

                result.keywords = kw
    
                dispatch({
                    type: GET_SEARCH_DATAS,
                    payload: result.data
                })
            }, 500)
        }
    },

    searchMovie (keyword, offset) {
        return async dispatch => {
            const result = await request('GET', api.SEARCH_MOVIE, {
                keyword,
                ci: 10,
                offset,
                limit: 20
            })

            dispatch({
                type: SEARCH_MOVIE,
                payload: result.data
            })
        }
    }
}

export default search