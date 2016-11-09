import React, { Component, PropTypes } from 'react';
import './SVGIconsPreviewer.less';
import fuzzysearch from 'fuzzysearch';
import ClearableInput from '../ClearableInput';
import icons from '../../../../generate-icons-result';

export default
class SVGIconsPreviewer extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      filterInputValue: ''
    };
  }

  filterIconsLists(icons, filterText) {
    icons.filter(component => {
      return fuzzysearch(filterText.toLowerCase(), component.info.name.toLowerCase())
    })
  }

  render() {
    let { iconsProps, containerStyle } = this.props;
    return (
      <div className="svg-icons-previewer">
        <div className="svg-icons-previewer__items-container">
          {
            Object.keys(icons).map((iconName, index) => (
              <div
                className="svg-icons-previewer__item"
                style={containerStyle}
                title={iconName.replace(/^svg/gi, '')}
                key={index}
              >
                <div className="svg-icons-previewer__item-renderer">
                  {React.createElement(icons[iconName], { ...iconsProps })}
                </div>
                <div className="svg-icons-previewer__item-name">
                  <span>{iconName.replace(/^svg/gi, '')}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

SVGIconsPreviewer.propTypes = {
  iconsProps: PropTypes.object,
  containerStyle: PropTypes.object
};
SVGIconsPreviewer.defaultProps = {
};
