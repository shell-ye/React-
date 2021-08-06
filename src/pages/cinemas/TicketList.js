import Button from 'Components/ui/Button'

const TicketList = props => {
    const renderTicket = () => {
        return props.list.map((item, index) => (
            <li key={ index }>
                <div className="time">{ item.tm }</div>
                <div className="info">
                    <p className="lang">{ item.lang + item.tp }</p>
                    <p className="room">{ item.th }</p>
                </div>
                <div className="price">
                    <span>￥</span>
                    <span className="origin">{ item.baseSellPrice }</span>
                    { item.vipPriceName && <span className="card">{ item.vipPriceName }</span> }
                    { item.vipPrice && <span className="now">{ item.vipPrice }</span> }
                </div>
                <Button>购票</Button>
            </li>
        ))
    }

    return (
        <ul className="ticket-list">{ renderTicket() }</ul>
    )
}

export default TicketList
