import './styles.css'
import React from 'react'

export const PaginationArea = ({ children }) => {
    return (
        <div className='pagination-area'>
            {children}
        </div>
    )
}