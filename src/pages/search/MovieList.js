import SearchMovieRow from 'Components/SearchMovieRow'
import { Toast } from 'antd-mobile'
import { NavLink } from 'react-router-dom'

const MovieList = props => {
    const { total, list, keyWords } = props
    console.log(keyWords)

    const clickHandler = item => {
        if ( item.sc ) {
            props.push({
                pathname: '/details',
                state: {
                    id: item.id
                }
            })
        } else {
            Toast.info('即将上映，敬请期待！')
        }
    }

    const renderMovies = () => {
        return list.map((item, index) => {
            if ( index < 3 ) {
                return (
                    <SearchMovieRow 
                        id={ item.id }
                        key={ item.id }
                        nm={ item.nm  }
                        img={ item.img }
                        sc={ item.sc }
                        wish={ item.wish }
                        enm={ item.enm }
                        cat={ item.cat }
                        pubDesc={ item.pubDesc }
                        onClick={() => clickHandler(item)}
                    />
                )
            } else {
                return null
            }
        })
    }

    return (
        <div className="movie-list">
            <p>电影/电视剧/综艺</p>
            <ul>{ renderMovies() }</ul>
            { total > 3 && <NavLink to={{
                pathname: '/movielist',
                state: {
                    keyWords
                }
            }} className="footer">查看全部{ total }部影视剧</NavLink> }
        </div>
    )
}

export default MovieList