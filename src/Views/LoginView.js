import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { setToken, login } from '../api'


export default function LoginForm(props){
	const {
		setUser
	} = props

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	
	const handleLogin = async (e) => {
		e.preventDefault()

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

	return(
		<div>
			<form onSubmit={handleLogin}>
				<div>
					<input type="text" value={username} name='Username' placeholder='Usuario' onChange={(e) => setUsername(e.target.value)}/>
				</div>
				<div>
					<input type="password" value={password} name='Password' placeholder='Contrase&ntilde;a' onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button>Iniciar Sesi&oacute;n</button>
			</form>
			<Link to='/'>Cancelar</Link>
		</div>
	)
}