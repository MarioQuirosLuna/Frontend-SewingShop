import React from 'react'
import Product from './Product/Product'
import NotFound from './ProductNotFound'

const Gallery = (props) => {

	const {products = [], setImage, changeVisibility} = props

	return (
		<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center">
			{
				products.length === 0 ?
					<NotFound />
					:
					products.map((product) => {
						return (
							<Product product={product} key={product.id} setImage={setImage} changeVisibility={changeVisibility}/>
						)
					})
			}
		</div>
	)
}

export default Gallery