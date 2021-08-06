import './index.scss'

const Button = props => {
    const className = 'maoyan-button ' + props.theme

    return <button 
        className={ className }
        onClick={ props.onClick }
    >{ props.children }</button>
}

export default Button