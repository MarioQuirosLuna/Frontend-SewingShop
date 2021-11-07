import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { setToken, login } from '../api'


export default function LoginForm(props){
	const {
		setUser
	} = props

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	
	const history = useHistory()

	const handleLogin = async (e) => {
		e.preventDefault()

		try{
			const user = await login({
				username: username, password: password
			})

			window.localStorage.setItem(
				'loggedAppUser', JSON.stringify(user)
			)

			setToken(user.token)
			setUser(user)

			history.push('/')
		}catch(error){
			console.log(error)
		}
	}

	return(
		<div className="container text-center p-3">
			<div className="form m-auto shadow-lg p-2 mt-5">
				<form onSubmit={handleLogin}>
					<div className="pt-4">
						<h1>Inicio de Sesi&oacute;n</h1>
					</div>
					<div className="pt-4">
						<input className="form-control shadow-lg rounded" type="text" value={username} name='Username' placeholder='Usuario' onChange={(e) => setUsername(e.target.value)}/>
					</div>
					<div className="pt-4">
						<input className="form-control shadow-lg rounded" type="password" value={password} name='Password' placeholder='Contrase&ntilde;a' onChange={(e) => setPassword(e.target.value)}/>
					</div>
					<div className="pt-4">
						<button className="btn btn-primary shadow-lg rounded">Iniciar Sesi&oacute;n</button>
					</div>
				</form>
				<div className="pt-4">
					<Link to='/' className="btn btn-danger shadow-lg rounded">Cancelar</Link>
				</div>
			</div>
		</div>
	)
}