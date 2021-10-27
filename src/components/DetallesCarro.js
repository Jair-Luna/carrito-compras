// class DetallesCarro extends Component {
// render() {
// const { carro } = this.props;
// const total = carro.reduce((acc, el) => acc + el.total, 0);
// return (
// <div className="detallesCarro">
// <ul className="ul">
// <li key="tilte" className="liProducto bolded">
// <span>Producto</span>
// <span></span>
// <span>Cant.</span>
// <span>Subtotal</span>
// </li>
// {carro.map((x) => (
// <li key={x.name} className="liProducto">
// <img alt={x.name} src={x.img} width="50" height="32" />
// {x.name} <span>{x.cantidad}</span> <span>{x.total}</span>
// </li>
// ))}
// <li key="Total" className="liProducto bolded">
// <span>Total:</span>
// <span>{total}</span>
// </li>
// </ul>
// </div>
// );
// }
// }

const DetallesCarro = ({ carro }) => {
  const total = carro.reduce((acc, el) => acc + el.total, 0);

  return (
    <div className="detallesCarro">
      <ul className="ul">
        <li key="tilte" className="liProducto bolded">
          <span>Producto</span>
          <span></span>
          <span>Cant.</span>
          <span>Subtotal</span>
        </li>
        {carro.map((x) => (
          <li key={x.name} className="liProducto">
            <img alt={x.name} src={x.img} width="50" height="32" />
            {x.name} <span>{x.cantidad}</span> <span>{x.total}</span>
          </li>
        ))}
        <li key="Total" className="liProducto bolded">
          <span>Total:</span>
          <span>{total}</span>
        </li>
      </ul>
    </div>
  );
};

export default DetallesCarro;
