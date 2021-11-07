import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import Header from '../Header'
import '../../css/Style.css'

const NavBar = (props) => {
	const {onSearch, user, handleLogOut} = props

	return (
		<nav className="fondo">
			<div className="">
				<div className="d-flex">
					<div className="col-7 p-3">
						<img className="shadow-lg bg-body rounded" src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1635217676/Logo_apnt8n.png" alt="logo" width="128" height="128"/>
					</div>
					<div className="col-5 p-3">
						{
							!user ? 
								<Link to='/login' className="btn btn-primary">Sesi&oacute;n</Link>
								:
								<Link to='/' onClick={handleLogOut} className="btn btn-danger">Cerrar Sesi&oacute;n</Link>
						}
					</div>
				</div>
				<div className="d-inline">
					<div className="p-2 flex-fill">
						<SearchBar onSearch={onSearch}/>
					</div>
					<div className="p-2 flex-fill">
						{
							((user && user.role === 'user') || !user) ? null : <Header />
						}
					</div>
				</div>
			</div>
				
		</nav>
	)
}

export default NavBar
