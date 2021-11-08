import React, {useState} from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Gallery from '../Components/Gallery/Gallery'
import Modal from '../Components/Modal'

export default function HomeView(prop) {

	const {user, handleLogOut, products, onSearch} = prop
	const [modalVisibility, setModalVisibility] = useState(false)
	const [image, setImage] = useState(null)

	const changeVisibility = () => {
		setModalVisibility(!modalVisibility)
	}

	if(modalVisibility) {
		document.body.classList.add('active-modal')
	} else {
		document.body.classList.remove('active-modal')
	}

	return (
		<div className="container-xxl shadow-lg">
			{
				modalVisibility && image ? 
					<Modal imageUrl={image} modalVisibility={modalVisibility} changeVisibility={changeVisibility}/> 
					:''
			} 
			<div>
				<NavBar user={user} handleLogOut={handleLogOut} onSearch={onSearch}/>
				<div className="container">
					<Gallery products={products} setImage={setImage} changeVisibility={changeVisibility} />
				</div>
			</div> 
		</div>
	)
}
