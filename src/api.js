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

export const newProduct = (newProduct) => {
	const config = {
		header: {
			Authorization: token
		}
	}

	const req = axios.post(baseUrl + '/products', newProduct, config)
	return req.then(res => res.data)
}

export const login = async (credentials) => {
	const { data } = await axios.post(baseUrl+'/login',credentials)
	return data
}