import React from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import '../css/Modal.css'

const Modal = (props) => {

	const {imageUrl, changeVisibility} = props

	return (
		<div className="modal-content">
			<div className="overlay-content"></div>
			<div className="modal-cont">
				<button className="btn  close-modal" onClick={() => changeVisibility()}><XCircleFill /></button>
				<img className="img3 mb-3 border border-3" src={imageUrl} alt={imageUrl} />
			</div>
		</div>
	)
}

export default Modal