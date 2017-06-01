/* eslint-disable react/jsx-pascal-case */
import React, { Component, PropTypes } from 'react';
import s from './SVGIcon.module.less';
import SVG from '../SVG';

export default
class SVGIcon extends Component {
  render() {
    let { className, size, color, bgColor, ...restProps } = this.props;
    let style = Object.assign({}, { fill: color, width: '100%', height: '100%' }, this.props.style);
    return (
      <div
        className={`${s.svgIcon} ${className || ''}`}
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
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  style: PropTypes.object
};
SVGIcon.defaultProps = {
  size: '24px',
  color: '#000',
  bgColor: 'transparent',
  style: { }
};
