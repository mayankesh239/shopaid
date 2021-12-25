import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'



const ProductCard = ({ product }) => {

    const options = {
        readOnly: true,
        color: "rgb(48, 48, 48)",
        activeColor: "tomato",
        value: product.ratings,
        precision: 0.5,
        // size: window.innerWidth < 600 ? 25 : 50,
    }

    return (
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <Rating {...options} />
                <span>
                    ( {product.numOfReviews} Reviews)
                </span>
                <span>
                    ₹{product.price}
                </span>
            </div>
        </Link>
    )
}

export default ProductCard
