import axios from 'axios'

const baseUrl = 'https://backend-sewingshop.herokuapp.com/api'
//const localUrl = 'http://localhost:3001/api'

let token = null

export const setToken = newToken => {
	token = `Bearer ${newToken}`
}

export const getProducts = async () => {
	try {
		const response = await fetch(baseUrl + '/products')
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

export const searchProducts = async (nameProduct) => {
	try{
		const res = await axios.get(`${baseUrl}/products/name/${nameProduct}`)
		const data = res.data
		return data
	}catch(e){
		console.error(e)
	}
}

export const newProduct = (newProduct) => {
	const config = {
		headers: {
			'Authorization': token,
			'Content-Type': 'multipart/form-data'
		}
	}

	const req = axios.post(baseUrl + '/products', newProduct, config)
	return req.then(res => res.data).catch(e => {console.error(`ErrorFront: ${e}`)})
}

export const putProduct = (id, newProduct) => {
	const config = {
		headers: {
			'Authorization': token,
			'Content-Type': 'multipart/form-data'
		}
	}

	const req = axios.put(`${baseUrl}/products/${id}`, newProduct, config)
	return req.then(res => res.data).catch(e => {console.error(`ErrorFront: ${e}`)})
}

export const deleteProduct = (id) => {
	const config = {
		headers: {
			'Authorization': token,
			'Content-Type': 'application/json',
		}
	}

	const req = axios.delete(`${baseUrl}/products/${id}`, config)
	return req.then(res => res.data).catch(e => {console.error(`ErrorFront: ${e}`)})
}

export const login = async (credentials) => {
	const { data } = await axios.post(baseUrl+'/login',credentials)
	return data
}