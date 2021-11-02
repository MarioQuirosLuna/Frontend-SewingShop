import React from 'react'

export default function ItemList(props) {

	const { product, index, handlePutProduct, handleDeleteProduct} = props
    
	return (
		<tr>
			<td>{index}</td>
			<td>{product.nameProduct}</td>
			<td>{product.price}</td>
			<td><img className="product-img" src={product.images[0].url} alt={product.nameProduct} /></td>
			<td><button onClick={() => handlePutProduct(product)}>Actualizar</button></td>
			<td><button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button></td>
		</tr>
	)
}
