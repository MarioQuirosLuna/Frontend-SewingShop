import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
	return (
		<div className="row bg-dark p-2 rounded">
			<ul className="nav justify-content-left">
				<li className="nav-item">
					<Link className="btn nav-link text-light" to="/">Inicio</Link>
				</li>
				<li className="nav-item">
					<Link className="btn nav-link text-light" to="/manageProducts">Administrar Productos</Link>
				</li>			
			</ul>
		</div>
	)
}
