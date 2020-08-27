import React from 'react'

import sandalsImg from '../../assets/images/product-sandal.jpg'

import arrowUp from '../../assets/icons/arrow-up.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import elipseMargenta from '../../assets/icons/elipse-color-margenta.svg'
import elipseOcean from '../../assets/icons/elipse-color-ocean.svg'
import elipseBrown from '../../assets/icons/elipse-color-brown.svg'
import elipseBlack from '../../assets/icons/elipse-color-black.svg'

import './styles/mobile.css'
import './styles/desktop.css'


function Main(){
  return(
      <section className='main-section'>
              
        <legend> <p>Home /<strong> Sapatos</strong></p> </legend> 
      
      <div className="show-room">
      <div className="left-navigation">
        
        <div className="left-nav-bar">
          <div>
            <p>Vídeo</p>
            <img id='video'src={sandalsImg} alt="sandals"/>
          </div>
        

          <img id='arrowUp'src={arrowUp} alt="Arrow Up"/>

          <div className="scroling-content">
            <img src={sandalsImg} alt="sandals"/>
            <img src={sandalsImg} alt="sandals"/>
            <img src={sandalsImg} alt="sandals"/>
            <img src={sandalsImg} alt="sandals"/>
          </div>

          <img id='arrowDown'src={arrowDown} alt=""/>
        </div>
      </div>
      
      
      <div className="product-photo">
        {/* Only In Mobile ! ! ! */}
          <h1>Rasteira tira dedo</h1>
          <span>RT 0568 | 03.07.0653</span>
        {/* END */}
        <img src={sandalsImg} alt="sandals" />
      </div>

      <div className="product-details">
        
        <div className="details-header">
          <h1>Rasteira tira dedo</h1>
          <span>RT 0568 | 03.07.0653</span>
          <div id="price">
            <p>R$69,00 |</p><strong>R$ 55,20</strong>
          </div>
          <p>Ou 6x de R$ 9,20</p>
           {/* ONLY MOBILE */}
           <button>Adicionar à sacola</button>
            {/* END */}
        </div>

        <div className="details-color">
          <p>Cor: <span>(Fuscia)</span></p>
          <div id="colors-pick">
          <img src={elipseMargenta} alt="elipse margenta"/>
          <img src={elipseOcean} alt="elipse ocean"/>
          <img src={elipseBrown} alt="elipse brown"/>
          <img src={elipseBlack} alt="elipse black"/>
          </div>
        </div>

        <div className="details-size">
          <div id="sizes-propertys">
            <p>Tamanho: <span>(37)</span></p>
            <p>Guia de medidas</p>
          </div>

          <div id="sizes-box">
            <span id="box">33</span>
            <span id="box">34</span>
            <span id="box">35</span>
            <span id="box">36</span>
            <span id="box">37</span>
            <span id="box">38</span>
            <span id="box">39</span>
            <span id="box">40</span>
            <span id="box">41</span>
            <span id="box">42</span>
          </div>
        </div>
        
        <div className="details-footer">
          <button>Adicionar à sacola</button>
          <p>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
        </div>
      </div>

      </div>
    </section>
  )
  
}
export default Main;

