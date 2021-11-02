import React from 'react'
import NavBar from '../Components/NavBar'
import Gallery from '../Components/Gallery'

export default function Home(prop) {

	const {user, handleLogOut, products} = prop

	return (
		<div>
			<NavBar user={user} handleLogOut={handleLogOut}/>
			<Gallery products={products}/>
		</div>
	)
}
