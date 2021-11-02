import React from 'react'
import SearchBar from '../Components/SearchBar'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const NavBar = (props) => {
	const {onSearch, user, handleLogOut} = props

	return (
		<nav className="navbar">
			<div>
				<div className="navbar-icon">
					<img src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1635217676/Logo_apnt8n.png" alt="logo" />
				</div>
				<SearchBar onSearch={onSearch}/>
				<div>
					{
						!user ? 
							<Link to='/login'>Sesi&oacute;n</Link>
							:
							<Link to='/' onClick={handleLogOut}>Cerrar Sesi&oacute;n</Link>
					}
				</div>
			</div>
			{
				((user && user.role === 'user') || !user) ? null : <Header />
			}
		</nav>
	)
}

export default NavBar