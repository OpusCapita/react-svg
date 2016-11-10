import React, { Component, PropTypes } from 'react';
import './SVGIconsPreviewer.less';
import fuzzysearch from 'fuzzysearch';
import ClearableInput from '../../external_components/ClearableInput';
import SVG from '../SVG';

export default
class SVGIconsPreviewer extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      filterInputValue: '',
      filteredIcons: {}
    };
  }

  componentWillMount() {
    this.setState({ filteredIcons: this.props.icons });
  }

  componentWillUnmount() {
    this.clearFilterInputTimeout();
  }

  clearFilterInputTimeout() {
    this._filterInputTimeout && clearTimeout(this._filterInputTimeout);
  }

  filterIconsLists(icons, filterText) {
    return icons.filter(icon => fuzzysearch(filterText.toLowerCase(), icon.name.toLowerCase()));
  }

  handleFilterInputChange(value) {
    this.clearFilterInputTimeout();
    this._filterInputTimeout = setTimeout(() => {
      let filteredIcons = this.filterIconsLists(this.props.icons, value);
      this.setState({
        filterInputValue: value,
        filteredIcons
      })
    }, 250);
  }

  render() {
    let { icons, iconsProps, containerStyle } = this.props;
    let { filteredIcons } = this.state;
    return (
      <div className="svg-icons-previewer">
        <div className="svg-icons-previewer__filter-input">
          <ClearableInput
            inputSpecificProps={{
              className: 'form-control',
              placeholder: 'Search icons',
              onChange: value => this.handleFilterInputChange(value)
            }}
          />
        </div>
        <div className="svg-icons-previewer__items-container">
          {
            filteredIcons.map((icon, index) => (
              <div
                className="svg-icons-previewer__item"
                style={containerStyle}
                title={icon.name.replace(/^svg/gi, '')}
                key={index}
              >
                <div className="svg-icons-previewer__item-renderer">
                  {<SVG svg={icon.svg} { ...iconsProps } />}
                </div>
                <div className="svg-icons-previewer__item-name">
                  <span>{icon.name.replace(/^svg/gi, '')}</span>
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
  containerStyle: PropTypes.object,
  icons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    svg: PropTypes.string
  }))
};

SVGIconsPreviewer.defaultProps = {
  icons: []
};
