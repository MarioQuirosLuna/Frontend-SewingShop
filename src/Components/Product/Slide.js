import React from 'react'
import ButtonImage from './ButtonImage'
import '../../css/Style.css'

export default function Slide(props) {

	const { imageUrl, nameProduct, prevImage, nextImage } = props

	return (
		<div>
			<div className="container-image">
				<img className="img-fluid mb-3 border border-3 img-product" src={imageUrl} alt={nameProduct} width="300" height="300"/>
			</div>
			{
				(prevImage && nextImage) ? 
					<div className=" d-flex justify-content-center">
						<ButtonImage direction={true} onClick={prevImage}/>
						<ButtonImage direction={false} onClick={nextImage}/>
					</div>
					:''
			}
		</div>
		
	)
}
