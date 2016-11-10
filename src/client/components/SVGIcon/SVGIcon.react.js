import React, { Component, PropTypes } from 'react';
import SVG from '../SVG';
import './SVGIcon.less';

export default
class SVGIcon extends Component {
  render() {
    let { className, size, color, bgColor } = this.props;
    let style = Object.assign({}, { width: '80%', height: '80%', fill: color }, this.props.style);
    return (
      <div
        style={{
          alignItems: 'center',
          backgroundColor: bgColor,
          display: 'inline-flex',
          height: size,
          justifyContent: 'center',
          width: size
        }}
      >
        <SVG { ...this.props } style={style} />
      </div>
    );
  }
}

SVGIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
};
SVGIcon.defaultProps = {
  size: '24px',
  color: '#000',
  bgColor: 'transparent'
};
