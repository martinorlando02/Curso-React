import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className='text-center text-black text-3xl mt-20'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer