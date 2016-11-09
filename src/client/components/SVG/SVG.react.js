import React, { Component, PropTypes } from 'react';
import './SVG.less';

let defaultStyle = { height: '24px', width: '24px' };
export default
class SVG extends Component {
  render() {
    let { svg } = this.props;
    let style = Object.assign({}, defaultStyle, this.props.style);
    return (
      <div
        className="svg"
        dangerouslySetInnerHTML={{ __html: svg }}
        style={style}
      >
      </div>
    );
  }
}

SVG.propTypes = {
  style: PropTypes.object,
  svg: PropTypes.string
};

SVG.defaultProps = {
  style: { },
  svg: `<svg></svg>`
};
