import React from 'react'
import Product from '../Product/Product'

const Gallery = (props) => {

	const {products = []} = props

	return (
		<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center">
			{
				products.map((product) => {
					return (
						<Product product={product} key={product.id}/>
					)
				})
			}
		</div>
	)
}

export default Gallery