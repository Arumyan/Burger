import React, { Component } from 'react';
import classes from './Modal.module.scss';

import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, next) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('[Modal] didUpdate');
  }

  render() {
    return (
      <Auxillary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Auxillary>
    );
  }
}

export default Modal;
