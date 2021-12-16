function Card(props) {
    return (
        <div>
            <h1>{props.id}</h1>
            <h2>{props.desc}</h2> 
        </div>
    )
}

export default Card;