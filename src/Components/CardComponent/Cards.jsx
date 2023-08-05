import "./Cards.scss"

function Cards(props) {
    return (
        <div className="blog-wrapper">
            <div className="image-card">
                <img src={props.image} alt="" />
            </div>
            <h3>{props.header}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Cards