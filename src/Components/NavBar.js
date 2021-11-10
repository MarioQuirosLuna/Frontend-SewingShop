import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
import Header from '../Components/Header'

const NavBar = (props) => {
	const {onSearch, user, handleLogOut} = props

	return (
		<nav className="fondo">
			<div className="">
				<div className="d-flex">
					<div className="col-7 p-3">
						<img className="shadow-lg bg-body rounded" src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1636419055/Logo_u41gn7.jpg" alt="logo" width="128" height="128"/>
					</div>
					<div className="d-flex col-5 p-3 justify-content-end">
						<div>
							{
								!user ? 
									<Link to='/login' className="btn btn-primary">Sesi&oacute;n</Link>
									:
									<Link to='/' onClick={handleLogOut} className="btn btn-danger">Cerrar Sesi&oacute;n</Link>
							}
						</div>
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
