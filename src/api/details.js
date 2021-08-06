import BASE_URL from "./config"

const api = {
    GET_MOVIE_DETAILS: `${ BASE_URL }/api/mtrade/mmdb/movie/v5/`,
    GET_SHOW_DATE: `${ BASE_URL }/api/mtrade/mmcs/show/v1/movie/showdays.json`,
    GET_MOVIE_CINEMA: `${ BASE_URL }/api/mtrade/mmcs/cinema/v1/select/movie/cinemas.json`
}

export default api