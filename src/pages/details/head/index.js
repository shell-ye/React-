const Head = props => {
    return (
        <div className="head">
            {/* 背景 */}
            <div className="mask"></div>
            <div 
                className="background"
                style={{backgroundImage: 'url(' + props.img.replace('w.h', '71.113') + ')'}}
            ></div>
            {/* 背景 */}

            <img src={ props.img.replace('w.h', '110.150') } alt={ props.nm } />
            <div className="info">
                <p className="title">{ props.nm }</p>
                <p className="precent">{ props.sc }</p>
                <p className="score">
                    <span>{ props.cat }</span>
                    <span 
                        className={ props.ver.indexOf('IMAX 3D') !== -1 ? 'version three' : props.ver.indexOf('IMAX 2D') !== -1 ? 'version two' : 'version' }
                    ></span>
                </p>
                <p className="district">{ props.src + '/' + props.dur }</p>
                <p className="publish">{ props.pubDesc }</p>
            </div>
        </div>
    )
}

export default Head