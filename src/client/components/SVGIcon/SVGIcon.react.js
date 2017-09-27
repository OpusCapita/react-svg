/* eslint-disable react/jsx-pascal-case */
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import './SVGIcon.less';
import SVG from '../SVG';

export default
class SVGIcon extends Component {
  render() {
    let { className, svg, ...restProps } = this.props;
    return (
      <div
        {...restProps}
        className={`oc-svg-icon ${className}`}
      >
        <SVG className="oc-svg-icon__svg" svg={svg} />
      </div>
    );
  }
}

SVGIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  svg: PropTypes.string
};
SVGIcon.defaultProps = {
  className: '',
  style: { },
  svg: ''
};
