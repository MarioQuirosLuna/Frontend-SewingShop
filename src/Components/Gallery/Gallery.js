import React from 'react'
import Product from '../Product/Product'

const Gallery = (props) => {

	const {products} = props

	return (
		<div>
			<div className="gallery-grid">
				{
					products.map((product) => {
						return (
							<Product product={product} key={product.id}/>
						)
					})
				}
			</div>
		</div>
	)
}

export default Gallery