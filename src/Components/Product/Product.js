import React, {useState} from 'react'
import Slide from '../Product/Slide'

const Product = (props) => {

	const { product, setImage, changeVisibility } = props

	const [imageIndex, setImageIndex] = useState(0)

	const nextImage = () => {
		if(imageIndex < product.images.length - 1) {
			setImageIndex(imageIndex + 1)
		}
	}

	const prevImage = () => {
		if(imageIndex > 0 ) {
			setImageIndex(imageIndex - 1)
		}
	}

	return (
		<div className="card text-center shadow-lg p-3 bg-body rounded m-4">
			<Slide imageUrl={product.images[imageIndex].url} nameProduct={product.nameProduct} prevImage={prevImage} nextImage={nextImage} setImage={setImage} changeVisibility={changeVisibility} />
			<div>
				<h2>{product.nameProduct}</h2>
				<div><p>Desde ₡{product.priceInitial}</p><p>Hasta ₡{product.priceFinal}</p></div>
				<span className="rounded-pill bg-success p-2 text-light">{product.availability}</span>
			</div>
			
		</div>
	)
}

export default Product