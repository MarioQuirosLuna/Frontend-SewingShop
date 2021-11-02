import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Gallery from '../Components/Gallery/Gallery'

export default function HomeView(prop) {

	const {user, handleLogOut, products, onSearch} = prop


	return (
		<div>
			<NavBar user={user} handleLogOut={handleLogOut} onSearch={onSearch}/>
			<Gallery products={products}/>
		</div>
	)
}
