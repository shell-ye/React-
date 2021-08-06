import './index.scss'
import Button from 'Components/ui/Button'

const SearchMovieRow = props => {
    return (
        <li key={ props.id } onClick={ props.onClick } className="search-movie-row">
            <img src={ props.img.replace('w.h', '64.90') } alt={ props.nm } />
            <div>
                <p className="title"><span>{ props.nm }</span><span>{ props.sc ? props.sc + '分' : props.wish + '人想看' }</span></p>
                <span>{ props.enm }</span>
                <span>{ props.cat }</span>
                <span>{ props.pubDesc }</span>
            </div>
            { props.sc ? <Button>购票</Button> : <Button theme="orange" style={{background: '#faaf00'}}>想看</Button> }
        </li>
    )
}

export default SearchMovieRow