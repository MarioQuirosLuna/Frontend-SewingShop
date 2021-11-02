import React, {useState} from 'react'
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
		<div className="card text-center shadow-lg p-3 mb-5 bg-body rounded">
			<Slide imageUrl={product.images[imageIndex].url} nameProduct={product.nameProduct} prevImage={prevImage} nextImage={nextImage} productImgLength={product.images.length}/>
			<div className="card-body">
				<h2>{product.nameProduct}</h2>
				<p>₡{product.price}</p>
				<spam className="rounded-pill bg-success p-2 text-light">{product.availability}</spam>
			</div>
		</div>
	)
}

export default Product