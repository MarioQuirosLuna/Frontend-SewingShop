import React, {useState} from 'react'
import { newProduct } from '../api'

export default function ProductForm(){

	const [nameProduct, setNameProduct] = useState('')
	const [price, setPrice] = useState('')
	const [images, setImages] = useState()

	const handleSubmitNewProduct = async (e) => {
		e.preventDefault()

		try{
			const formData = new FormData()
			formData.append('nameProduct', nameProduct)
			formData.append('price', price)
			for(let i =0; i < images.length; i++) {
				formData.append('images', images[i])
			}

			await newProduct(formData)
		}catch(err){
			console.error(err)
		}
	}

	return(
		<div>
			<form onSubmit={handleSubmitNewProduct}>
				<div>
					<input type="text" name="nameProduct" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} placeholder="Nombre de Producto"/>
				</div>
				<div>
					<input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio"/>
				</div>
				<div>
					<input name="images" onChange={(e) => setImages(e.target.files)} type="file" multiple />
				</div>
				<button type="submit" >Agregar Producto</button>
			</form>
		</div>
	)
}