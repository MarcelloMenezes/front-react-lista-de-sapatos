import './card.css';

function Card({ index, image, name, description, currentPrice, oldPrice, parcelPrice, mostrarSapato }) {
    return (
        <div className='card'>
            <img className='imgSapato' src={image} onClick={() => mostrarSapato(image, name, description, currentPrice, oldPrice, parcelPrice)} />
            <p>{name}</p>
            <div className='flex-center'>
                <p className='risco margin-right'>{oldPrice}</p>
                <h1>{currentPrice} </h1>
            </div>
            <div className='flex-center'>
                <h3 className='margin-right'>6x {parcelPrice}</h3>
                <p>Sem juros </p>
            </div>
        </div>
    );
}

export default Card