import React, { useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { setToken, getProducts, searchProducts } from './api'
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import ManageProductView from './Views/ManageProductView'
import '../src/css/Style.css'

function App() {

	const [user, setUser] = useState(null)
	const [products, setProducts] = useState([])

	useEffect(() =>{
		fetchProducts()
	},[])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
		if(loggedUserJSON){
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			setToken(user.token)
		}
	},[])

	const fetchProducts = async () => {
		const data = await getProducts()
		setProducts(data)
	}

	const handleLogOut = () => {
		setUser(null)
		setToken('')
		window.localStorage.removeItem('loggedAppUser')
	}

	const onSearch = async (nameProduct) => {
		try{
			if(!nameProduct) {
				setProducts(await getProducts())
				return 
			}

			const results = await searchProducts(nameProduct)
			setProducts(results)
		}catch(e){
			console.error(e)
		}
	}

	return (
		<div className="App back min-vh-100">
			<BrowserRouter>
				<Switch>
					<Route exact path='/'><HomeView user={user} setUser={setUser} handleLogOut={handleLogOut} products={products} onSearch={onSearch}/></Route>
					<Route path='/login' render={() => {
						return user ? <Redirect to='/' /> : <LoginView setUser={setUser}/>
					}}/>
					<Route path='/manageProducts' render={() => {
						return !user ? <Redirect to='/' /> : <ManageProductView products={products} setProducts={setProducts} fetchProducts={fetchProducts} onSearch={onSearch}/>
					}}/> 
				</Switch>
			</BrowserRouter>
		</div>
		
	)
}

export default App
