import React, { Component, PropTypes } from 'react';
import s from './SVG.module.less';

let defaultStyle = { height: '24px', width: '24px' };

export default
class SVG extends Component {
  render() {
    let { svg, children, className } = this.props;
    let style = Object.assign({}, defaultStyle, this.props.style);
    return (
      <div
        className={`${s.svg} ${className}`}
        dangerouslySetInnerHTML={{ __html: svg }}
        style={style}
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
