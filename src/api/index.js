import request from '@/utils/request'

export const getHotMovies = () => {
    return request('GET', '/ajax/movieOnInfoList', {
        token: '',
        optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
        optimus_risk_level: 71,
        optimus_code: 10
    })
}

export const pushHotMovies = ids => {
    return request('GET', '/ajax/moreComingList', {
        token: '',
        movieIds: ids,
        optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
        optimus_risk_level: 71,
        optimus_code: 10
    })
}

export const getCommingMovies = () => {
    return request('GET', '/ajax/comingList', {
        token: '',
        ci: 83,
        limit: 10,
        optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
        optimus_risk_level: 71,
        optimus_code: 10
    })
}

export const pushCommingMovies = ids => {
    return request('GET', '/ajax/moreComingList', {
        token: '',
        ci: 83,
        limit: 10,
        movieIds: ids,
        optimus_uuid: 'BA28D270EAC011EB9574C1B96FF718D22D643DD60A3D4A14B317F7EE376027E3',
        optimus_risk_level: 71,
        optimus_code: 10
    })
}