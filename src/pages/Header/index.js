import './styles.css';
import Banner from '../../assets/banner.jpg'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <img className='banner' src={Banner} />
      <div className='informacoes'>
        <h1>Moda Masculina</h1>
        <p>Sapatos sociais - casuais - esporte fino</p>
      </div>
      <img className='logo' src={Logo} />
    </header>
  )
}

export default Header;