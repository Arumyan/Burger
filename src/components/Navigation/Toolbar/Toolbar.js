import React from 'react';
import classes from './Toolbar.module.scss';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div className={classes.Logo}>LOGO</div>
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;