import React from 'react';
import PropTypes from 'prop-types';

class SharedButton extends React.Component {

  eventHandler(){
    if(this.props.emitEvent){
      this.props.emitEvent();
    }
  }
  render(){
    const {buttonText} = this.props;
    return (
      <button data-test="buttonComponent" onClick={()=>this.eventHandler()}>
        {buttonText}
      </button>
    )
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;