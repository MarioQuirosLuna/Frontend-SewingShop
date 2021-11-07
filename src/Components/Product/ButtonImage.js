import React from 'react'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons'

const ButtonImage = (props) => {

	const {direction, onClick} = props

	return (
		<div>
			<button className="btn" onClick={() => onClick()}>
				{
					direction ? <ArrowLeftCircleFill width="32" height="32"/> : <ArrowRightCircleFill width="32" height="32"/>
				}				
			</button>
		</div>
	)
}

export default ButtonImage