import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Card.css';
import api from '../../services/api'
import logounb from '../../img/logounb.png'


export default function CardUnb(){
    const [Livro, setLivro] = useState([]);

    useEffect(() => {
        api.get()
        .then((response) => {
            setLivro(response.data)
            console.log(response.data)
        })

        .catch(() => {
            console.log('Deu errado')
        })
    
    }, [])

    return(
      <div>
        {Livro.map((Livro, key) => {
            const vestibular = Livro.vestibular
            const id = Livro._id;
            const titulo = Livro.titulo;

            if (vestibular === 'UnB'){
                return (
                    <div key={key} className='card'>
        
                    <div className='imagem'> <img src={logounb} alt="ig"></img></div>
        
                    <div className='infos'>
        
                        <h1>{titulo}</h1>
        
                        <Link to={`/livro/${id}`} className="link">Saiba mais</Link>
        
                    </div>
                    </div>
                    )
            }
           
        }
    
    )}
      </div>
    )
    
}