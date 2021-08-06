import { GET_MOVIE_DETAILS, GET_SHOW_DATE, CHANGE_SHOW_DATE, GET_MOVIE_CINEMA } from './actionType'
import api from '../api/details'
import request from 'Utils/request'

const details = {
    // 获取电影详情
    getMovieDetails (id) {
        return async dispatch => {
            let result = await request('GET', `${ api.GET_MOVIE_DETAILS }/${ id }.json`)

            dispatch({
                type: GET_MOVIE_DETAILS,
                payload: result.data
            })
        }
    },

    // 获取播放日期
    getShowDate (movieId) {
        return async dispatch => {
            let date = await request('GET', api.GET_SHOW_DATE, {
                movieId,
                channelId: 4,
                cityId: 83
            })

            let cinema = {}
            if ( date && date.data && date.data.data ) {
                cinema = await request('GET', api.GET_MOVIE_CINEMA, {
                    limit: 20,
                    offset: 0,
                    utm_term: 7.5,
                    client: 'iphone',
                    channelId: 4,
                    areaId: -1,
                    brandId: -1,
                    districtId: -1,
                    hallType: -1,
                    lineId: -1,
                    movieId,
                    serviceId: -1,
                    stationId: -1,
                    showDate: date.data.data.dates[0].date,
                    cityId: 83,
                    ci: 83
                })
            }
            
            dispatch({
                type: GET_SHOW_DATE,
                payload: {
                    date: date.data,
                    cinema: cinema.data || []
                }
            })
        }
    },

    // 修改选中播放日期
    changeShowDate (movieId, showDate) {
        return async dispatch => {
            // 获取新日期的电影列表
            let cinema = await request('GET', api.GET_MOVIE_CINEMA, {
                limit: 20,
                offset: 0,
                utm_term: 7.5,
                client: 'iphone',
                channelId: 4,
                areaId: -1,
                brandId: -1,
                districtId: -1,
                hallType: -1,
                lineId: -1,
                movieId,
                serviceId: -1,
                stationId: -1,
                showDate,
                cityId: 83,
                ci: 83
            })

            dispatch({
                type: CHANGE_SHOW_DATE,
                payload: {
                    date: showDate,
                    cinema: cinema.data
                }
            })
        }
    },

    // 获取电影播放的影院
    getMovieCinema (movieId, showDate) {
        return async dispatch => {
            let result = await request('GET', api.GET_MOVIE_CINEMA, {
                limit: 20,
                offset: 0,
                utm_term: 7.5,
                client: 'iphone',
                channelId: 4,
                areaId: -1,
                brandId: -1,
                districtId: -1,
                hallType: -1,
                lineId: -1,
                movieId,
                serviceId: -1,
                stationId: -1,
                showDate,
                cityId: 83,
                ci: 83
            })
            dispatch({
                type: GET_MOVIE_CINEMA,
                payload: result.data
            })
        }
    }
}

export default details