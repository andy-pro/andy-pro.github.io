'use strict';

import './index.scss';

import React from 'react';

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      on: props.on,
      hover: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleOver = this.handleOver.bind(this);
    // this.handleOut = this.handleOut.bind(this);
  }

  handleChange = e => {
    const on = e.target.checked;
    this.setState({on});
    this.props.onChange(on, e);
  }
  handleOver = () => this.setState({hover: true});
  handleOut = () => this.setState({hover: false});

  render() {
    let pos = 0;
    if (this.state.hover) pos += 29;
    if (this.state.on) pos += 58;
    let style = {
      backgroundPosition: `0 -${pos}px`
    };
    return (
      <label className="r-checkbox">
        <input type="checkbox"
          onChange={this.handleChange}
          onFocus={this.handleOver}
          onBlur={this.handleOut}
          defaultChecked={this.state.on}
        />
        <span className="r-checkbox__img"
          title={this.state.on ? 'Продолжить' : 'Завершить'}
          onMouseOver={this.handleOver}
          onMouseOut={this.handleOut}
          style={style}>
        </span>
      </label>
    );
  }

}

Checkbox.propTypes = {
  on: React.PropTypes.boolean,
  onChange: React.PropTypes.func
};
Checkbox.defaultProps = {
  on: false,
  onChange: function() {}
};
