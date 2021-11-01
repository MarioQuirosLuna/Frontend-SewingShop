import React from 'react'
import '../css/ProductStyle.css'

const Product = (props) => {

	const { product } = props

	return (
		<div className="product-container">
			<div className="product-img-container">
				<img className="product-img" src={product.images[0].url} alt={product.nameProduct} />
			</div>
			<div className="product-description-container">
				<div className="product-name">
					<h2>{product.nameProduct}</h2>
				</div>
				<div className="product-price">
					<p>₡{product.price}</p>
				</div>
			</div>
		</div>
	)
}

export default Product