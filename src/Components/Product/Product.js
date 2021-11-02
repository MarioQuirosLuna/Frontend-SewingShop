import React, {useState} from 'react'
import '../Product/ProductStyle.css'
import Slide from '../Product/Slide'

const Product = (props) => {

	const { product } = props

	const [imageIndex, setImageIndex] = useState(0)

	const nextImage = (productImgLength) => {
		if(imageIndex < productImgLength - 1) {
			setImageIndex(imageIndex + 1)
		}
	}

	const prevImage = () => {
		if(imageIndex > 0 ) {
			setImageIndex(imageIndex - 1)
		}
	}

	return (
		<div className="product-container">
			<Slide imageUrl={product.images[imageIndex].url} nameProduct={product.nameProduct} prevImage={prevImage} nextImage={nextImage} productImgLength={product.images.length}/>
			<div className="product-description-container">
				<div className="product-name">
					<h2>{product.nameProduct}</h2>
				</div>
				<div className="product-price">
					<p>₡{product.price}</p>
				</div>
				<div className="product-availability">
					<p>{product.availability}</p>
				</div>
			</div>
		</div>
	)
}

export default Product