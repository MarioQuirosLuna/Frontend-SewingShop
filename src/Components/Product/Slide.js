import React from 'react'

export default function Slide(props) {

	const { imageUrl, nameProduct, prevImage, nextImage, productImgLength} = props

	const arrowLeft = 'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'
	const arrowRigth = 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'

	return (
		<div className="">
			<img className="img-fluid mb-3 border border-3" src={imageUrl} alt={nameProduct} width="300" height="300"/>
			<div className=" d-flex justify-content-center">
				<div className="">
					<button className="btn" onClick={() => prevImage()}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
						<path d={arrowLeft}/>
					</svg></button>
				</div>
				<div className="">
					<button className="btn" onClick={() => nextImage(productImgLength)}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
						<path d={arrowRigth}/>
					</svg></button>
				</div>
			</div>
		</div>
		
	)
}
