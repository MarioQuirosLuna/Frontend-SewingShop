import React, {useState} from 'react'
import NavBar from '../Components/NavBar'
import Gallery from '../Components/Gallery'
import Modal from '../Components/Modal'
import Loading from '../Components/Loading'

export default function HomeView(prop) {

	const {user, handleLogOut, products, onSearch, loading } = prop
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
					{
						loading ?
							<Loading />
							:
						 <Gallery products={products} setImage={setImage} changeVisibility={changeVisibility} />							
					}
				</div>
			</div> 
		</div>
	)
}
