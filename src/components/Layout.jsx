import React from 'react'
import '../styles/Layout.scss'

export const Layout= ({children}) => {

    return(
        <section className='section'> 
            {
                children
            }
        </section>
    )
}