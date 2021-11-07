import React from 'react'

export default function FormProduct(props) {

	const {handleSubmitProduct,
		nameProduct,  setNameProduct,
		price, setPrice,
		setImages, 
		handleButtonLabel
	} = props

	return (
		<div className="container- text-center">
			<div className="form p-2 m-auto mt-2 mb-4">
				<form className="form" onSubmit={handleSubmitProduct}>
					<div className="pt-1">
						<input className="form-control" type="text" name="nameProduct" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} placeholder='Nombre del nuevo Producto'/>
					</div>
					<div className="pt-3">
						<input className="form-control" type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio del producto"/>
					</div>
					<div className="pt-3">
						<input className="form-control" name="images" id="formFileMultiple" onChange={(e) => setImages(e.target.files)} type="file" multiple />
					</div>
					<div className="pt-3">
						<button className="btn btn-primary shadow-lg rounded" type="submit" >{handleButtonLabel}</button>
					</div>
				</form>
			</div>
		</div>
	)
}
