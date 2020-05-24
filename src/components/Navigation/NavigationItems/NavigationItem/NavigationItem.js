import React from 'react';
import classes from './NavigationItem.module.scss';
//import {NavLink} from 'react-router-dom';

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    {/* <NavLink to={props.link} activeClassName={classes.active} exact={props.exact}>
      {props.children}
    </NavLink> */}
    <a href={props.link}>{props.children}</a>
  </li>
);

export default navigationItem;