import React, { useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { setToken } from './api'
import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import ManageProductView from './Views/ManageProductView'

function App() {

	const [user, setUser] = useState(null)

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
		if(loggedUserJSON){
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			setToken(user.token)
		}
	},[])

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomeView} />
					<Route path='/login'><LoginView setUser={setUser}/></Route> 
					<Route path='/newProduct' component={ManageProductView} /> 
				</Switch>
			</BrowserRouter>
		</div>
		
	)
}

export default App
