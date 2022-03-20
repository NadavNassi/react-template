import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <section className={`header flex space-between ${isOpen ? 'open' : ''}`} >
            <div className="screen" onClick={toggleMenu}></div>
            <div className="logo">
                <img src="logo512.png" alt="" />
            </div>
            <MenuIcon className="burger" onClick={toggleMenu} />
            <nav className="flex space-between">
                <NavLink to="/" className="clean-text" onClick={() => setIsOpen(false)} >Home</NavLink>
                <NavLink to="/cannabis" className="clean-text" onClick={() => setIsOpen(false)} >Cannabis</NavLink>
                <NavLink to="/about" className="clean-text" onClick={() => setIsOpen(false)} >About</NavLink>
            </nav>
        </section>
    )
}
