import React from 'react'
import SearchBar from '../Components/SearchBar'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	const {onSearch} = props

	return (
		<div className="navbar">
			<div>
				<div className="navbar-icon">
					<img src="https://res.cloudinary.com/dusx4zdpz/image/upload/v1635217676/Logo_apnt8n.png" alt="logo" />
				</div>
				<SearchBar onSearch={onSearch}/>
				<div>
					<Link to='/login'>Sesi&oacute;n</Link>
				</div>
			</div>
		</div>
	)
}

export default NavBar