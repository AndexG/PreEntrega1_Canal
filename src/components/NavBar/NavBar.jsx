import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (

    <header>

        <img className='logo' src="https://www.pedidosporwhatsapp.com.ar/fotos/379_logo.jpg" alt="Logo Molly" />
        
        <h1>Bebidas Molly</h1>
        
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Catalogo</li>
                <li>Nosotros</li>
                <li>Contacto</li>
                <li><CartWidget/></li>
            </ul>
            
        </nav> 

    </header>
  )
}

export default NavBar