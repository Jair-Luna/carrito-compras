import Producto from './Producto';
import './styles/Productos.css';

// class Productos extends Component {
// render() {
// const { productos, agregarAlCarro } = this.props;

// return (
// <div className="productos">
// {productos.map((producto) => (
// <Producto
// agregarAlCarro={agregarAlCarro}
// key={producto.name}
// producto={producto}
// />
// ))}
// </div>
// );
// }
// }

const Productos = ({ agregarAlCarro, productos }) => {
  return (
    <div className="productos">
      {productos.map((producto) => (
        <Producto
          agregarAlCarro={agregarAlCarro}
          key={producto.name}
          producto={producto}
        />
      ))}
    </div>
  );
};

export default Productos;
