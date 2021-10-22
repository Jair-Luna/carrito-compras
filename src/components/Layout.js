import { Component } from 'react';
import './styles/Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
