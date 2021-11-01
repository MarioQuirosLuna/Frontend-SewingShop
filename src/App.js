import React, { useState, useEffect} from 'react'
import NavBar from './Components/NavBar'
import Gallery from './Components/Gallery'
import LoginForm from './Components/LoginForm'
import { setToken, getProducts, login } from './api'

function App() {

	const [products, setProducts] = useState([])
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)

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

	const handleLogin = async (event) => {
		event.preventDefault()

		try{
			const user = await login({
				username: username, password: password
			})

			console.log(user)

			window.localStorage.setItem(
				'loggedAppUser', JSON.stringify(user)
			)

			setToken(user.token)

			setUser(user)
			setUsername('')
			setPassword('')
		}catch(error){
			console.log(error)
		}
	}

	const onSearch = () => {
		
	}

	return (
		<div className="App">

			<LoginForm username={username} password={password} handleUsernameChange={(event) => setUsername(event.target.value)} handlePasswordChange={(event) => setPassword(event.target.value)} handleSubmitChange={handleLogin} />

			<div>
				<NavBar onSearch={onSearch}/>
				<Gallery products={products}/>
			</div>
		</div>
	)
}

export default App
