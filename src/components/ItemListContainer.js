import React from 'react'

function ItemListContainer(props) {
  return (
    <div className='text-center text-6xl p-40'>
        <h1>Bienvenido a {props.nombre}.</h1>
    </div>
  )
}

export default ItemListContainer