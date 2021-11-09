import React from 'react'
import {Whatsapp, Facebook} from 'react-bootstrap-icons'

const Footer = () => {
	return (
		<div className="text-center">
			<div className="container-fluid text-center text-md-left">
				<div className="row pt-4">
					<div className="col-md-6">
						<h5>Para mayor informaci&oacute;n</h5>
						<p>Cont&aacute;cteme:</p>
					</div>
					<div className="col-md-6">
						<h5><Whatsapp /> Whatsapp</h5>
						<p>+506 7231 9011</p>
						<h5><Facebook /> Facebook</h5>
						<p><a href="https://www.facebook.com/CintyaLunaQ" target="_blank" rel="noreferrer">Taller de Costura Cintya Luna</a></p>
					</div>

				</div>
			</div>
			<div className="footer-copyright text-center py-3">
				<div className="container-fluid">
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/MarioQuirosLuna" target="_blank" rel="noreferrer"> MarioQuir&oacute;sLuna </a>
				</div>
			</div>
		</div>
	)
}

export default Footer
