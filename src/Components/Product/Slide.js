import React from 'react'

export default function Slide(props) {

	const { imageUrl, nameProduct, prevImage, nextImage, productImgLength} = props

	return (
		<div>
			<button onClick={() => prevImage()}>Prev</button>
			<div className="product-img-container">
				<img className="product-img" src={imageUrl} alt={nameProduct} />
			</div>
			<button onClick={() => nextImage(productImgLength)}>Next</button>
		</div>
		
	)
}
