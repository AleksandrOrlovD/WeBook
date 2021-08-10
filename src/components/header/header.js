import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import Container from '@material-ui/core/Container';

const Header = () => {
  return (
    <header className="header"><Link to='/'>WeBooks</Link></header>
  );
};

export default Header;