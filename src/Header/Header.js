import React from 'react';
import './Header.css'
// This stateless functional component is responsible only for returning the JSX of the header. 
// It's componentized to future-proof the app, as other pages would have other headers, etc, or maybe nav too. 
export default function Header() {
    return (
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>
    );
}