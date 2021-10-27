import { useState } from 'react';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';

// class App extends Component {
//   state = {
//     productos: [
//       { name: 'Tomate', price: 150, img: 'images/tomate.jpg' },
//       { name: 'Lechuga', price: 200, img: 'images/lechuga.jpg' },
//       { name: 'Arbeja', price: 250, img: 'images/arbejas.jpg' },
//     ],
//     carro: [],
//     esCarroVisible: false,
//   };

//   agregarAlCarro = (producto) => {
//     const { carro } = this.state;

//     if (carro.find((x) => x.name === producto.name)) {
//       const newCarro = carro.map((x) =>
//         x.name === producto.name
//           ? {
//               ...x,
//               cantidad: x.cantidad + 1,
//               total: x.price * (x.cantidad + 1),
//             }
//           : x
//       );
//       return this.setState({ carro: newCarro });
//     }

//     return this.setState({
//       carro: this.state.carro.concat({
//         ...producto,
//         cantidad: 1,
//
//       }),
//     });
//   };

//   mostrarCarro = () => {
//     if (!this.state.carro.length) {
//       return;
//     }
//     this.setState({ esCarroVisible: !this.state.esCarroVisible });
//   };

//   render() {
//     const { esCarroVisible } = this.state;
//     return (
//       <div>
//         <Navbar
//           carro={this.state.carro}
//           esCarroVisible={esCarroVisible}
//           mostrarCarro={this.mostrarCarro}
//         />
//         <Layout>
//           <Title />
//           <Productos
//             agregarAlCarro={this.agregarAlCarro}
//             productos={this.state.productos}
//           />
//         </Layout>
//       </div>
//     );
//   }
// }

const App = () => {
  const [productos] = useState([
    { name: 'Tomate', price: 150, img: 'images/tomate.jpg' },
    { name: 'Lechuga', price: 200, img: 'images/lechuga.jpg' },
    { name: 'Arbeja', price: 250, img: 'images/arbejas.jpg' },
  ]);

  const [carro, setCarro] = useState([]);

  const [esCarroVisible, setVisible] = useState(false);

  const agregarAlCarro = (producto) => {
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
              total: producto.price,
            }
          : x
      );
      return setCarro({ carro: newCarro });
    }

    return setCarro({
      carro: carro.concat({
        ...producto,
        cantidad: 1,
        total: producto.price,
      }),
    });
  };

  const mostrarCarro = () => {
    if (!carro.length) {
      return;
    }
    setVisible({ esCarroVisible: !esCarroVisible });
  };

  console.log(productos, carro);

  return (
    <div>
      <Navbar
        carro={carro}
        esCarroVisible={esCarroVisible}
        mostrarCarro={mostrarCarro}
      />
      <Layout>
        <Title />
        <Productos agregarAlCarro={agregarAlCarro} productos={productos} />
      </Layout>
    </div>
  );
};

export default App;
