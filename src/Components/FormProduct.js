import React from 'react'

export default function FormProduct(props) {

	const {handleSubmitProduct,
		nameProduct,  setNameProduct,
		priceInitial, setPriceInitial,
		priceFinal, setPriceFinal,
		setImages, 
		handleButtonLabel
	} = props

	return (
		<div className="container text-center">
			<div className="form m-auto mt-2 mb-3">
				<form className="form needs-validation" onSubmit={handleSubmitProduct} novalidate>
					<div className="pt-1">
						<input className="form-control" type="text" name="nameProduct" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} placeholder='Nombre del nuevo Producto' required />
					</div>
					<div className="row pt-3">
						<div className="col-6">
							<input className="form-control" type="number" name="priceInitial" value={priceInitial} onChange={(e) => setPriceInitial(e.target.value)} placeholder="Desde el precio" required />
						</div>
						<div className="col-6">
							<input className="form-control" type="number" name="priceFinal" value={priceFinal} onChange={(e) => setPriceFinal(e.target.value)} placeholder="Hasta el precio" required />
						</div>
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
