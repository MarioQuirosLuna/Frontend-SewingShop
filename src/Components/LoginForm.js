import React from 'react'
import Togglable from './Togglable'

export default function LoginForm(props){
	const {
		username,
		password,
		handleUsernameChange,
		handlePasswordChange,
		handleSubmitChange
	} = props
	
	return(
		<Togglable buttonLabel="Sesi&oacute;n">
			<form onSubmit={handleSubmitChange}>
				<div>
					<input type="text" value={username} name='Username' placeholder='Usuario' onChange={handleUsernameChange}/>
				</div>
				<div>
					<input type="password" value={password} name='Password' placeholder='Contrase&ntilde;a' onChange={handlePasswordChange}/>
				</div>
				<button>
                    Iniciar Sesi&oacute;n
				</button>
			</form>
		</Togglable>
	)
}