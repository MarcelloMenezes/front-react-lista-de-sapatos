import './style.css';
import shoes from '../../bancodados/data'
import Card from '../../Components/card'
import close from '../../assets/close-icon.svg'
import { useState } from 'react'

function Main() {
  const [sapatos, setSapatos] = useState(shoes)
  const [modal, setModal] = useState({
    img: '',
    nome: '',
    descricao: '',
    precoAtual: '',
    precoAntigo: '',
    precoParcela: ''
  })
  const [abrirFecharModal, setAbrirFecharModal] = useState(false)

  function mostrarSapato(image, name, description, currentPrice, oldPrice, parcelPrice) {
    setModal({
      img: image,
      nome: name,
      descricao: description,
      precoAtual: currentPrice,
      precoAntigo: oldPrice,
      precoParcela: parcelPrice
    })
    setAbrirFecharModal(true)
  }

  return (
    <main className='flex cards'>
      {sapatos.map((sapato) => (
        <Card
          key={sapato.id}
          index={sapato.id}
          image={sapato.image}
          name={sapato.name}
          description={sapato.description}
          currentPrice={sapato.currentPrice}
          oldPrice={sapato.oldPrice}
          parcelPrice={sapato.parcelPrice}
          mostrarSapato={mostrarSapato}
        />
      ))}
      {abrirFecharModal && <div className='card-modal'>
        <div className='modal'>
          <img className='sapatoModal' src={modal.img} />
          <h2>{modal.nome}</h2>
          <p className='informacoes-produto'>{modal.descricao}</p>
          <div className='flex'>
            <button className='btn-comprar'>COMPRAR</button>
            <div>
              <div className='flex-center'>
                <p className='risco margin-right'>{modal.precoAntigo}</p>
                <h1>{modal.precoAtual}</h1>
              </div>
              <div className='flex-center'>
                <h3 className='margin-right'>6x {modal.precoParcela} </h3>
                <p>Sem juros</p>
              </div>
            </div>
          </div>
        </div>
        <img className='btn-close' onClick={() => setAbrirFecharModal(false)} src={close} />
      </div>}
    </main>
  );
}

export default Main;
