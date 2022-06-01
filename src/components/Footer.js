import React from 'react'
import Nav from './Nav'
import Icons from '../assets/images/icons.svg'

const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__nav">
          <Nav navClass="footer"/>
        </div>
        <div className="footer__center">
          <p>Карань - питомник декоративных растений.</p>
          <p>Все права защищены. <span>{curYear}</span></p>
        </div>
        <div className="footer__social social">
          <h4>Мы в соцсетях</h4>
          <div className="social__links">
            <a href='http://web.telegram.org' className='social__link social__link--tg' target={'_blank'} rel='noreferrer'>
              <svg>
                <use xlinkHref={`${Icons}#icon-tg`}/>
              </svg>
            </a>
            <a href='http://vk.ru' className='social__link social__link--vk' target={'_blank'} rel='noreferrer'>
              <svg>
                <use xlinkHref={`${Icons}#icon-vk`}/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer