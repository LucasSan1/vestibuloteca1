// importar api,react-router-dom, useParams, usestate, useeffect
import './Livro.css'
import api from '../../services/api'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import leftArrow from '../../img/arrow-left.svg'

export default function Livro(){
    let { livroId } = useParams();
    const [Livro, verLivro] = useState([]);

    useEffect(() => {
        api.get(`/${livroId}`)
        .then((response) => {
            verLivro(response.data)
            console.log(response.data)
        })

        .catch(() => {
            console.log('Deu errado')
        })

        if(Livro.length === 0){
            <div className='loading'>Carregando</div>
        }
    
    }, [livroId, Livro.length])

    return(
        <div>
            <div className='container'>
                <header className='header'> <Link to='/'><img src={leftArrow} alt='seta para voltar'/></Link> <h1>¶ Vestibuloteca</h1></header>
                
                <section>
                <div className='capa'><img src={Livro.capa} alt='capa'/></div>
                </section>

                    <section className='titulo-autor'>
                    <h1 className='titulo'>{Livro.titulo}</h1>
                    <p className='autor'>{Livro.autor}</p>
                    </section>

                    <div className='infoLivro'>
                        <p>{Livro.genero}</p>
                        <p>{Livro.escolaLiteraria}</p>
                        <p>{Livro.ano}</p>
                        <p>{Livro.paginas} páginas</p>
                    </div>
                    <p className='pLink'>Link para Compra: <Link className='linkCompra'>{Livro.linkCompra}</Link></p>
                    <div className='sinopse'>
                        <h2>Sinopse</h2>
                        <p>{Livro.sinopse}</p>
                    </div>
            </div>
      </div>
    )

}