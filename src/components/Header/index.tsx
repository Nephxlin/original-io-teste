import React from 'react';

import logo from '../../assets/images/logo.svg';
import search from '../../assets/icons/search.svg';
import shoppingBag from '../../assets/icons/shopping-bag.svg';
import menuMobile from '../../assets/icons/menu-mobile.svg'

import './styles/mobile.css';
import './styles/desktop.css';

function Header() {
  return (
    <div className="Header">
      <div id="logo">
        <img src={logo} alt="logotype"/>
      </div>
      
      <header className="top-bar">
       
       <div className='left-item-top-bar'>
         <img src={menuMobile} alt="Menu"/>
         <p>Entrar | Cadastrar-se</p>
       </div>

      <div className="mid-item-top-bar">
        <div id="mid-content">
          <div>
            <p>SAPATOS</p>
          </div>
          <div>
            <p>BOLSAS</p>
          </div>
          
          <div>
            <p>ACESSÓRIOS</p>
          </div>
          
          <div>
            <p>OFF</p>
          </div>
             
        </div>      
      </div>

       <div className="search-top-bar">
            <img src={search} alt="search"/>
            <input type="text" placeholder='Buscar'/>
       </div>
       <div className="shopping-bag-top-bar">
          <img src={shoppingBag} alt="shopping bag"/>
          <span>0</span>
        </div>
      </header>
    </div>
  );
}

export default Header;
