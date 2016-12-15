import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from 'opuscapita-showroom-client';

function requireAll(requireContext) {
  return requireContext.keys().map(key => ({
    name: key.replace(/(\.svg$|^\.\/)/gi, ''),
    svg: requireContext(key)
  }));
}

let icons = requireAll(require.context('!!raw-loader!opuscapita-ui-svg-icons/lib', true, /.*\.svg$/));

@showroomScopeDecorator
class SVGIconsPreviewerSCOPE extends Component {
  constructor(props) {
    super(props);
    this.state = { icons };
  }

  render() {
    return (this._renderChildren());
  }
}

export default SVGIconsPreviewerSCOPE;
