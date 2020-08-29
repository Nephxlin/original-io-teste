import React from 'react'

import './styles/mobile.css'
import './styles/desktop.css'

import facebook from '../../assets/icons/logo-facebook.svg'
import pinterest from '../../assets/icons/logo-pinterest.svg'
import instagram from '../../assets/icons/logo-instagram.svg'
import ebit from '../../assets/images/selo-ebit.png'
import vtex from '../../assets/images/vtex-pci-200.png'
import logoWhite from '../../assets/images/logo-white.svg'
import plus from '../../assets/icons/plus.svg'


function Footer(){
  return(
    <footer className="footer">

    <div className="footer-content">
      <div id="media">
        <div id="media-links">
          <img src={facebook} alt="facebook"/>
          <img src={pinterest} alt="pinterest"/>
          <img src={instagram} alt="instagram"/>
        </div>

        <div id="label">
          <img src={vtex} alt="vtex"/>
          <img src={ebit} alt="ebit"/>
        </div>

      </div>

      <div id="instituition">
        <div>
          <h1>Institucional</h1>
          <img src={plus} alt="icon"/>
        </div>
          <p>A Marca </p>
          <p>Lojas</p>
          <p>Contato</p>
      </div>

      <div id="info">
        <div>
          <h1>Informações</h1>
          <img src={plus} alt="icon"/>
        </div>
        
        <p>Formas de Pagamento</p>
        <p>Trocas e Devoluções</p>
        <p>Cuidados Com o Produto</p>
      </div>

      <div id="about-us">
        <div>
          <h1>Conheça</h1>
          <img src={plus} alt="icon"/>
        </div>
        <p>Franquia Multimarcas</p>
        <p>Trabalhe com a Gente</p>
        <p>Procon-RJ</p>
      </div>

      <div id="mailing">
        <div id="send-mail">
          <h1>Assine nossa news</h1>
          <p>Nome</p>
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="E-mail"/>
          <button>Enviar</button>
        </div>
      </div>
    </div>
      <footer id="footer-info">
        <p>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p>
        
        <img src={logoWhite} alt="Original.io"/>
      </footer>
    </footer>
  )
}

export default Footer