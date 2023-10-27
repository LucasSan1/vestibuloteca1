import biblioteca from '../../img/biblioteca.png'
import arrow from '../../img/arrow.svg';
import TabComponent from '../../components/Tabs/Tabs';
import logoutIcon from '../../img/logout.svg';
import { Link } from 'react-router-dom'
import { AuthContext } from "../../contexts/auth";
import React, { useContext } from "react";
import './Home.css'

export default function Home(){
    const { logout } = useContext(AuthContext);

    const deslogar = () => {
        logout();
    };
  
    return (

        <div>
           <button onClick={ deslogar } id='logout'/>
            <img src={ logoutIcon } alt='logout icon'/>
          <div className='imgHome'> <img className='bgImg' src={ biblioteca } alt='imagem biblioteca'/> 
          <div className='infoBox'>
            <h1>¶ Vestibuloteca </h1>
            <Link to='/tabs'>
              <p>Veja todos os livros <img className='btnArrow' src= {arrow} alt='seta'/> </p>
            </Link>
            
          </div>
        </div>
        
          <section className='slogan'>
            <h1>¶ Vestibuloteca</h1>
            
            <p>Todas as obras literárias dos maiores vestibulares brasileiros em um só lugar!</p>
          </section>

          <TabComponent></TabComponent>
        
        </div>
        )
}
