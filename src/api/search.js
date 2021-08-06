import BASE_URL from './config'

const api = {
    // 获取搜索结果
    GET_SEARCH_DATAS: `${ BASE_URL }/apollo/ajax/search`,

    // 搜索电影
    SEARCH_MOVIE: `${ BASE_URL }/searchlist/movies`
}

export default api