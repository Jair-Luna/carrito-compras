import Logo from './Logo';
import Carro from './Carro';
import './styles/Navbar.css';

// class Navbar extends Component {
// render() {
// const { carro, esCarroVisible, mostrarCarro } = this.props;
// return (
// <nav className="navbar">
// <Logo />
// <Carro
// carro={carro}
// esCarroVisible={esCarroVisible}
// mostrarCarro={mostrarCarro}
// />
// </nav>
// );
// }
// }

const Navbar = ({ carro, esCarroVisible, mostrarCarro }) => {
  return (
    <nav className="navbar">
      <Logo />
      <Carro
        carro={carro}
        esCarroVisible={esCarroVisible}
        mostrarCarro={mostrarCarro}
      />
    </nav>
  );
};

export default Navbar;
