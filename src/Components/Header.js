import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
	return (
		<ul className="nav justify-content-center">
			<li className="nav-item">
				<Link className="nav-link" to="/">Inicio</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/manageProducts">Administrar Productos</Link>
			</li>			
		</ul>
	)
}
