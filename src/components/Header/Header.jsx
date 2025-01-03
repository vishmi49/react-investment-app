import logoImage from '../../assets/investment-calculator-logo.png';
import './Header.css';

export default function Header() {
  return (
    <header id="header">
      <img src={logoImage} alt="Stylized atom" />
      <h1>Investment Caluculator</h1>
    </header>
  );
}