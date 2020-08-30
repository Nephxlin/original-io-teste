import React, { useState } from 'react'

import ModalAdd from '../ModalAdd'

import sandalsImg from '../../assets/images/product-sandal.jpg'
import bagImg from '../../assets/images/product-bag.jpg'
import leatherBagImg from '../../assets/images/product-bag.jpg'
import chromeSandalsImg from '../../assets/images/product-chrome-sandals.png'

import arrowUp from '../../assets/icons/arrow-up.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import elipseFuscia from '../../assets/icons/elipse-color-fuscia.svg'
import elipseOcean from '../../assets/icons/elipse-color-ocean.svg'
import elipseBrown from '../../assets/icons/elipse-color-brown.svg'
import elipseBlack from '../../assets/icons/elipse-color-black.svg'
import playVideo from '../../assets/icons/play-video.svg'

import './styles/mobile.css'
import './styles/desktop.css'

function Main(){
  
  // Get Color
  const [colorName,setColorName] = useState('Fuscia')

  const [colorOptions, setColorOptions] = useState([
    { 
      cor: elipseFuscia,
      name: 'Fuscia',
      selected: 'Enable'
    },
    {
      cor: elipseOcean,
      name: 'Oceano',
      selected: 'Disable'
    },
    {
      cor: elipseBrown,
      name: 'Marrom',
      selected: 'Disable'
    },
    {
      cor: elipseBlack,
      name: 'Preto',
      selected: 'Disable'
    },
  ])

  function handleSelectColor(props:string, index:number){   
    for(let item in colorOptions){
      colorOptions[item].selected = 'Disable'
    }
    if(colorOptions[index].name === props){
      return colorOptions[index].selected = 'Enable'
    }
  }

  function handleSetColor(props:string, index:number){
    setColorName(props)
    handleSelectColor(props, index)
  }

  //Get Size
  const [sizeTitle, setSizeTitle] = useState('37')
  const [sizeOptions, setSizeOptions] = useState([
    {
      size: '33',
      selected: 'Disable'
    },
    {
      size: '34',
      selected: 'Disable'
    },
    {
      size: '35',
      selected: 'Disable'
    },
    {
      size: '36',
      selected: 'Disable'
    },
    {
      size: '37',
      selected: 'Enable'
    },
    {
      size: '38',
      selected: 'Disable'
    },
    {
      size: '39',
      selected: 'Disable'
    },
    {
      size: '40',
      selected: 'Disable'
    },
    {
      size: '40',
      selected: 'Disable'
    },
    {
      size: '42',
      selected: 'Disable'
    }
  ])

  
  function handleSelectSize(props:string, index:number){   
   
    for(let item in sizeOptions){
      sizeOptions[item].selected= 'Disable'
    }
    if(sizeOptions[index].size === props){
      return sizeOptions[index].selected = 'Enable'
    }
  }



  function handleSetSize(props:string, index:number){
    setSizeTitle(props)
    handleSelectSize(props,index)
  }


  return(

      <section className='main-section'>

      <div className="show-room">
        <div className="left-navigation">
          <legend> <p>Home /<strong> Sapatos</strong></p> </legend> 
        <div className="left-nav-bar">
          <div>
            <p>Vídeo</p>     
            <img id='video'src={sandalsImg} alt="sandals"/>
            <img id='video-play'src={playVideo} alt="Play"/>   
          </div>
        

          <img id='arrowUp'src={arrowUp} alt="Arrow Up"/>

          <div className="scroling-content">
            <img src={bagImg} alt="sandals"/>
            <img src={chromeSandalsImg} alt="bag"/>
            <img src={sandalsImg} alt="sandals"/>
            <img src={leatherBagImg} alt="sandals"/>
          </div>

          <img id='arrowDown'src={arrowDown} alt=""/>
        </div>
      </div>
      
        {/* Only In Mobile ! ! ! */}
        <div className="product-photo">
        
            <h1>Rasteira tira dedo</h1>
            <span>RT 0568 | 03.07.0653</span>
        
          <img src={sandalsImg} alt="sandals" />
        </div>
        {/* END */}

      <div className="product-details">
        
        <div className="details-header">
          <h1>Rasteira tira dedo</h1>
          <span>RT 0568 | 03.07.0653</span>
          <div id="price">
            <p>R$69,00 |</p><strong>R$ 55,20</strong>
            <p>Ou 6x de R$ 9,20</p>

          </div>
            {/* ONLY MOBILE */}
            <div id="button">
              <button>Adicionar à sacola</button>
            </div>
            
            {/* END */}
          
        </div>

        <div className="details-color">
          <p>Cor: <span>({colorName})</span></p>
          <div id="colors-pick">

            {colorOptions.map((color , index ) => {
              return (
                <img 
                  id={color.selected}
                  key={index} 
                  src={color.cor} 
                  alt={color.name}
                  onClick={() => handleSetColor(`${color.name}`, index)}
                />
              )
            })} 
          </div>
        </div>

        <div className="details-size">
          <div id="sizes-propertys">
            <p>Tamanho: <span>({sizeTitle})</span></p>
            <p>Guia de medidas</p>
          </div>

          <div id="sizes-box">
            {sizeOptions.map((item, index)=>{
              return(
                <span 
                key={item.size} 
                className={`${item.selected}`}
                id="box"
                onClick={() => handleSetSize(`${item.size}`, index)}
                >{item.size}
                </span>
              )
            })}
          </div>
        </div>
        
          <div className="details-footer">
            <button >Adicionar à sacola</button>

            <h3>Descrição</h3>
            <p>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
          </div>
      </div>
    </div> 
    </section>
  )
  
}
export default Main;

