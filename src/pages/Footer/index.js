import './style.css';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import Logo from '../../assets/logo.svg'

function Footer() {
  return (
    <footer>
      <div className='endereco'>
        <h2>Endereço:</h2>
        <div className='endereco-cubos'>
          <p>Rua Cubos, 10</p>
          <p>Jardim Academy</p>
          <p>Salvador - Bahia - CEP 41820-021</p>
        </div>
        <div>
          <img className='imgFacebook' src={facebook} />
          <img src={instagram} />
        </div>
      </div>
      <img className='imgLogo' src={Logo} />
    </footer>
  )
}

export default Footer;