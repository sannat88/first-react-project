import React from 'react'
import "../Style/Navigation.css"

function Navigation() {
  return (
    <header>
      <nav>
      <div className='logo'>
        <img src="../public/images/nike-logo.png" alt="nike-logo" />
      </div>
      <div className='info'>
        <ul>
          <li>menu</li>
          <li>location</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <div>
        <button>login</button>
      </div>
    </nav>
    </header>
  )
}

export default Navigation
