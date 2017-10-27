import React, { Component } from 'react';
import './PageHeader.css';

class PageHeader extends Component {
  render() {
    return (
      <div className="Header">
        <header className="navbar">
          <h1 className="pull-left">Cards Against Assembly</h1>
        </header>
      </div>
    );
  }
}

export default PageHeader;

