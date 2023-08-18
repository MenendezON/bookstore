import '../css/header.module.css';
import profil from '../assets/images/profil.png';
import NavBar from './Navigation';

function Header() {
  return (
    <header>
      <h1>BookStore CMS</h1>
      <NavBar />
      <div>
        <img src={profil} alt=" " />
      </div>
    </header>
  );
}

export default Header;
