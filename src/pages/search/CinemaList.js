import { NavLink } from "react-router-dom"
import SearchCinemaRow from 'Components/SearchCinemaRow'

const CinemaList = props => {
    console.log(props)
    const { list, total, keyWords } = props

    const renderCinemaList = () => {
        return list.map((item, index) => {
            if ( index < 3 ) {
                return (
                    <SearchCinemaRow 
                        key={ item.id } 
                        nm={ item.nm }
                        sellPrice={ item.sellPrice }
                        addr={ item.addr }
                        onClick={() => props.push({pathname: '/cinemas', state: {id: item.id}})} 
                    />
                )
            } else {
                return null
            }
        })
    }

    return (
        <div className="cinema-list">
            <p className="head">影院</p>
            <ul>{ renderCinemaList() }</ul>
            { total > 3 && <NavLink to={{
                pathname: '/cinemalist',
                state: {
                    keyWords
                }
            }} className="footer">查看全部{ total }家电影院</NavLink>}
        </div>
    )
}

export default CinemaList