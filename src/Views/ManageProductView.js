import React, {useState} from 'react'
import { newProduct, putProduct, deleteProduct } from '../api'
import ItemList from '../Components/ItemList'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import FormProduct from '../Components/FormProduct/FormProduct'
import { TrashFill, Tools } from 'react-bootstrap-icons'


export default function ProductForm(props){

	const {products = [], setProducts, fetchProducts, onSearch} = props

	const [modePost, setModePost] = useState(true)
	const [productId, setProductId] = useState('')
	const [nameProduct, setNameProduct] = useState('')
	const [price, setPrice] = useState('')
	const [images, setImages] = useState()

	const handleSubmitNewProduct = async (e) => {
		e.preventDefault()

		try{
			const formData = new FormData()
			formData.append('nameProduct', nameProduct.toLowerCase())
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

	const handleSubmitPutProduct = async (e) => {
		e.preventDefault()

		try{
			const formData = new FormData()
			formData.append('nameProduct', nameProduct.toLowerCase())
			formData.append('price', price)
			for(let i =0; i < images.length; i++) {
				formData.append('images', images[i])
			}

			await putProduct(productId,formData)
			fetchProducts()

			setModePost(true)
			setProductId('')
			setNameProduct('')
			setPrice('')
			setImages()
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

	const handlePutProduct = (product) => {
		setModePost(false)
		setProductId(product.id)
		setNameProduct(product.nameProduct)
		setPrice(product.price)
	}

	return(
		<div className="container shadow-lg">
			<Header />
			<div>
				{
					modePost ? 
						<FormProduct 
							handleSubmitProduct={handleSubmitNewProduct} 
							nameProduct={nameProduct} setNameProduct={setNameProduct} 
							price={price} setPrice={setPrice}
							setImages={setImages}
							handleButtonLabel='Guardar Producto'/>
						:
						<FormProduct 
							handleSubmitProduct={handleSubmitPutProduct} 
							nameProduct={nameProduct} setNameProduct={setNameProduct} 
							price={price} setPrice={setPrice}
							setImages={setImages}
							handleButtonLabel='Actualizar Producto'/>
				}
			</div>
			<div className='container-fluid pt-2'>
				<SearchBar onSearch={onSearch}/>
				<div className="table-responsive rounded">
					<table className='table table-hover table-striped border-dark'>
						<thead className='table-dark text-center'>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nombre</th>
								<th scope="col">Precio</th>
								<th scope="col">Imagenes</th>
								<th scope="col"><Tools /></th>
								<th scope="col"><TrashFill /></th>
							</tr>
						</thead>
						<tbody>
							{
								products.map((product, index) => {
									return (
										<ItemList key={product.id} product={product} index={index} handlePutProduct={handlePutProduct} handleDeleteProduct={handleDeleteProduct} />
									)
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}