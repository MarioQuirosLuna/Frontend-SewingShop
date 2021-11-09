import React from 'react'

const Loading = () => {
	return (
		<div className="text-center">
			<div className="spinner-border p-5 m-5" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}

export default Loading