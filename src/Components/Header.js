import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
	return (
		<div>
			<Link to="/manageProducts">Administrar Productos</Link>
		</div>
	)
}
