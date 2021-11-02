import React, {useState} from 'react'
import { newProduct, deleteProduct } from '../api'
import ItemList from '../Components/ItemList'

export default function ProductForm(props){

	const {products, setProducts, fetchProducts} = props

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
			fetchProducts()
		}catch(err){
			console.error(err)
		}
	}

	const handleDeleteProduct = async (id) => {

		try{
			await deleteProduct(id)

			const newProducts = products.filter(product => product.id !== id)
			setProducts(newProducts)
		}catch (err){
			console.error(err)
		}	
		
	}

	return(
		<div>
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
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Imagenes</th>
						<th>Actualizar</th>
						<th>Borrar</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((product, index) => {
							return (
								<ItemList key={product.id} product={product} index={index} handleDeleteProduct={handleDeleteProduct}/>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}