import React, { useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { setToken, getProducts } from './api'
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import ManageProductView from './Views/ManageProductView'

function App() {

	const [user, setUser] = useState(null)
	const [products, setProducts] = useState([])

	useEffect(() =>{
		fetchProducts()
	},[])

	const fetchProducts = async () => {
		const data = await getProducts()
		setProducts(data)
	}

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
		if(loggedUserJSON){
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			setToken(user.token)
		}
	},[])

	const handleLogOut = () => {
		setUser(null)
		setToken('')
		window.localStorage.removeItem('loggedAppUser')
	}


	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path='/'><HomeView user={user} setUser={setUser} handleLogOut={handleLogOut} products={products}/></Route>
					<Route path='/login'><LoginView setUser={setUser}/></Route>
					<Route path='/manageProducts'><ManageProductView products={products} setProducts={setProducts} fetchProducts={fetchProducts}/></Route> 
				</Switch>
			</BrowserRouter>
		</div>
		
	)
}

export default App
