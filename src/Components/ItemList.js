import React from 'react'
import { TrashFill, Tools } from 'react-bootstrap-icons'


export default function ItemList(props) {

	const { product, index, handlePutProduct, handleDeleteProduct} = props
    
	return (
		<tr className="text-center align-middle">
			<th scope="row">{index}</th>
			<td>{product.nameProduct}</td>
			<td>
				<div>₡{product.priceInitial}</div>
				<div>₡{product.priceFinal}</div>
			</td>
			<td><img className="img2 mb-3 border border-3" src={product.images[0].url} alt={product.nameProduct} /></td>
			<td><button className="btn" onClick={() => handlePutProduct(product)}><Tools /></button></td>
			<td><button className="btn" onClick={() => handleDeleteProduct(product.id)}><TrashFill /></button></td>
		</tr>
	)
}
