import React, {useState} from 'react'
import { newProduct, putProduct, deleteProduct } from '../api'
import ItemList from '../Components/ItemList'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import FormProduct from '../Components/FormProduct'
import Loading from '../Components/Loading'
import { TrashFill, Tools } from 'react-bootstrap-icons'
import ProductNotFound from '../Components/ProductNotFound'


export default function ProductForm(props){

	const {products = [], setProducts, fetchProducts, onSearch} = props

	const [loading, setLoading] = useState(false)
	const [modePost, setModePost] = useState(true)
	const [productId, setProductId] = useState('')
	const [nameProduct, setNameProduct] = useState('')
	const [priceInitial, setPriceInitial] = useState('')
	const [priceFinal, setPriceFinal] = useState('')
	const [images, setImages] = useState()
	const [message, setMessage] = useState('')

	const handleSubmitNewProduct = async (e) => {
		e.preventDefault()
		if(!images) return setMessage('Seleccione almenos una imagen*')

		try{
			const formData = new FormData()
			formData.append('nameProduct', nameProduct.toLowerCase())
			formData.append('priceInitial', priceInitial)
			formData.append('priceFinal', priceFinal)
			for(let i = 0; i < images.length; i++) {
				formData.append('images', images[i])
			}
			setLoading(true)
			await newProduct(formData)
			fetchProducts()
			setProductId('')
			setNameProduct('')
			setPriceInitial('')
			setPriceFinal('')
			setImages()
			setLoading(false)
		}catch(err){
			console.error(err)
		}
	}

	const handleSubmitPutProduct = async (e) => {
		e.preventDefault()

		try{
			const formData = new FormData()
			formData.append('nameProduct', nameProduct.toLowerCase())
			formData.append('priceInitial', priceInitial)
			formData.append('priceFinal', priceFinal)
			if(images){
				for(let i = 0; i < images.length; i++) {
					formData.append('images', images[i])
					console.log(images[i])
				}
			}else{
				formData.append('images', null)
			}
			setLoading(true)
			await putProduct(productId, formData)
			fetchProducts()
			setLoading(false)
			setModePost(true)
			setProductId('')
			setNameProduct('')
			setPriceInitial('')
			setPriceFinal('')
			setImages()
		}catch(err){
			console.error(err)
		}
	}

	const handleDeleteProduct = async (id) => {

		try{
			setLoading(true)
			await deleteProduct(id)

			const newProducts = products.filter(product => product.id !== id)
			setProducts(newProducts)
			setLoading(false)
		}catch (err){
			console.error(err)
		}	
	}

	const handlePutProduct = (product) => {
		setModePost(false)
		setProductId(product.id)
		setNameProduct(product.nameProduct)
		setPriceInitial(product.priceInitial)
		setPriceFinal(product.priceFinal)
		window.scroll(0,0)
	}

	const onSearchHandle = (text) => {
		setLoading(true)
		onSearch(text)
		setLoading(false)
	}

	const backToSave = () => {
		setProductId('')
		setNameProduct('')
		setPriceInitial('')
		setPriceFinal('')
		setImages()
		setModePost(true)
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
							priceInitial={priceInitial} setPriceInitial={setPriceInitial} priceFinal={priceFinal} setPriceFinal={setPriceFinal}
							setImages={setImages}
							handleButtonLabel='Guardar Producto'/>
						:
						<FormProduct 
							handleSubmitProduct={handleSubmitPutProduct} 
							nameProduct={nameProduct} setNameProduct={setNameProduct} 
							priceInitial={priceInitial} setPriceInitial={setPriceInitial} priceFinal={priceFinal} setPriceFinal={setPriceFinal}
							setImages={setImages}
							handleButtonLabel='Actualizar Producto'/>
				}
				<div className="text-center">
					<div>
						<button className="btn btn-secondary" onClick={backToSave}>Volver</button>
					</div>
					<span className="text-danger">{message}</span>
				</div>			
			</div>
			<div className='container-fluid pt-2'>
				<SearchBar onSearch={onSearchHandle}/>
				<div className="table-responsive rounded">
					{
						products.length === 0 ?
							<ProductNotFound />
							:
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
					}
					{ loading && <Loading />}
				</div>
			</div>
		</div>
	)
}