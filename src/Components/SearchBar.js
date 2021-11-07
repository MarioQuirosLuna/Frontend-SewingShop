import React, {useState} from 'react'

const Searchbar = (props) => { 
	const { onSearch } = props
	const [search, setSearch] = useState('')

	const onChange = (evt) =>{
		setSearch(evt.target.value.toLowerCase())
		if(evt.target.value.length === 0){
			onSearch(null)
		}
	}

	const onClick = async (evt) =>{
		onSearch(search)
	}

	const onKeyPress = async (evt) =>{
		if(evt.key === 'Enter'){
			onSearch(search)
		}
	}

	return (
		<div className="container input-group mb-3">
			<input className="form-control" placeholder="Buscar" onChange={onChange} onKeyPress={onKeyPress}></input>
			<button className="btn btn-success" onClick={onClick}>Buscar</button>
		</div>
        
	)
}

export default Searchbar