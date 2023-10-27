import './erro.css'
import { Link } from 'react-router-dom'
import arrowLeft from '../../img/arrow-left.svg'

export default function Erro(){
    return (
      <section className='containerE'>
        <h1 className='tituloE'>Ops!</h1>
        <p>Parece que algo deu errado.</p>
          <button className='btnBack'>
        <Link to={"/"}>
            <img src={arrowLeft} alt="seta" className='setaEsq'/>
            Voltar para página inicial
        </Link>
          </button>
      </section>
    );
}