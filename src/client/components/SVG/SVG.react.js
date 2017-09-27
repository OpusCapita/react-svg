import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './SVG.less';

export default
class SVG extends Component {
  render() {
    let { svg, children, className, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={`oc-svg ${className}`}
        dangerouslySetInnerHTML={{ __html: svg }}
      >
        {children}
      </div>
    );
  }
}

SVG.propTypes = {
  style: PropTypes.object,
  svg: PropTypes.string,
  className: PropTypes.string
};

SVG.defaultProps = {
  style: { },
  svg: `<svg></svg>`,
  className: ''
};
