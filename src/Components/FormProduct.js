import React from 'react'

export default function FormProduct(props) {

	const {handleSubmitProduct,
		nameProduct,  setNameProduct,
		price, setPrice,
		setImages, 
		handleButtonLabel
	} = props

	return (
		<div>
			<form onSubmit={handleSubmitProduct}>
				<div>
					<input type="text" name="nameProduct" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} placeholder="Nombre de Producto"/>
				</div>
				<div>
					<input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio"/>
				</div>
				<div>
					<input name="images" onChange={(e) => setImages(e.target.files)} type="file" multiple />
				</div>
				<button type="submit" >{handleButtonLabel}</button>
			</form>
		</div>
	)
}
