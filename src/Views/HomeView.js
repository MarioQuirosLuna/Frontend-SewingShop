import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Gallery from '../Components/Gallery/Gallery'

export default function HomeView(prop) {

	const {user, handleLogOut, products, onSearch} = prop


	return (
		<div className="">
			<NavBar user={user} handleLogOut={handleLogOut} onSearch={onSearch}/>
			<div className="container">
				<Gallery products={products}/>
			</div>
		</div>
	)
}
