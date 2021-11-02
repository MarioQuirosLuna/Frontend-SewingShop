import React, {useState, useEffect} from 'react'
import Product from './Product'
import { getProducts } from '../api'
import '../css/GalleryStyle.css'

const Gallery = () => {

	const [products, setProducts] = useState([])

	useEffect(() =>{
		fetchProducts()
	},[])

	const fetchProducts = async () => {
		const data = await getProducts()
		setProducts(data)
	}

	return (
		<div>
			<div className="gallery-grid">
				{products.map((product) => {
					return (
						<Product product={product} key={product.id}/>
					)
				})}
			</div>
		</div>
	)
}

export default Gallery