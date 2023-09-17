import './Card.css'

const Card = ({card}) => {

    const {name, image, price, duration, description} = card; 

    return (
        <div className="card-container">
            <img src={image} alt="" />
            <h4>Course Title: {name}</h4>
            <p>{description}</p>
            <div className='card-price'>
                <p>Price: {price}</p>
                <p>Credit: {duration}</p>
            </div>
            <button>Select</button>
        </div>
    );
};

export default Card;