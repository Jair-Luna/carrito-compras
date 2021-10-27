import './styles/Layout.css';

// class Layout extends Component {
// render() {
// return (
// <div className="layout">
// <div className="container">{this.props.children}</div>
// </div>
// );
// }
// }

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
