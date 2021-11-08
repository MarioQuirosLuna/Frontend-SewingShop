import React from 'react'
import ButtonImage from './ButtonImage'

export default function Slide(props) {

	const { imageUrl, nameProduct, prevImage, nextImage, setImage, changeVisibility } = props

	const handleVisibilityModal = () => {
		setImage(imageUrl)
		changeVisibility()
	}

	return (
		<div className="d-inline justify-content-center">
			<img className="img mb-3 border border-3" src={imageUrl} alt={nameProduct} onClick={handleVisibilityModal}/>
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
