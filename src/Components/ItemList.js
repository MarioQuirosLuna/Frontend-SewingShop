import React from 'react'
import Slide from '../Components/Product/Slide'
import { TrashFill, Tools } from 'react-bootstrap-icons'

export default function ItemList(props) {

	const { product, index, handlePutProduct, handleDeleteProduct} = props
    
	return (
		<tr className="text-center align-middle">
			<th scope="row">{index}</th>
			<td>{product.nameProduct}</td>
			<td>{product.price}</td>
			<td><Slide imageUrl={product.images[0].url} nameProduct={product.nameProduct}/></td>
			<td><button className="btn" onClick={() => handlePutProduct(product)}><Tools /></button></td>
			<td><button className="btn" onClick={() => handleDeleteProduct(product.id)}><TrashFill /></button></td>
		</tr>
	)
}
