import React, { Component, PropTypes } from 'react';
import SVG from '../SVG';

export default
class SVGIcon extends Component {
  render() {
    let { className, size, color, bgColor, ...restProps } = this.props;
    let style = Object.assign({}, { fill: color }, this.props.style);
    return (
      <div
        className={className}
        style={{
          alignItems: 'center',
          backgroundColor: bgColor,
          display: 'inline-flex',
          height: size,
          justifyContent: 'center',
          width: size
        }}
      >
        <SVG { ...restProps } style={style} />
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
