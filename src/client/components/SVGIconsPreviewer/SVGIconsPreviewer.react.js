import React, { Component, PropTypes } from 'react';
import s from './SVGIconsPreviewer.module.less';
import fuzzysearch from 'fuzzysearch';
import SVGIcon from '../SVGIcon';

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
    if (this._filterInputTimeout) {
      clearTimeout(this._filterInputTimeout);
    }
  }

  filterIconsLists(icons, filterText) {
    return icons.filter(icon => fuzzysearch(filterText.toLowerCase(), icon.name.toLowerCase()));
  }

  handleFilterInputChange(event) {
    let value = event.target.value;
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
    let { iconsProps, containerBgColor } = this.props;
    let { filteredIcons } = this.state;
    let containerStyle = {
      backgroundColor: containerBgColor,
      color: (iconsProps && iconsProps.color) || '#000'
    }
    return (
      <div className={s.svgIconsPreviewer}>
        <div className={s.filterInput}>
          <input
            className="form-control"
            placeholder="Search icons"
            onChange={this.handleFilterInputChange.bind(this)}
          />
        </div>
        <div className={s.itemsContainer}>
          {
            filteredIcons.map((icon, index) => (
              <div
                className={s.item}
                style={containerStyle}
                title={icon.name.replace(/^svg/gi, '')}
                key={index}
              >
                <div className={s.itemRenderer}>
                  {<SVGIcon svg={icon.svg} { ...iconsProps } />}
                </div>
                <div className={s.itemName}>
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
  containerBgColor: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    svg: PropTypes.string
  }))
};

SVGIconsPreviewer.defaultProps = {
  icons: []
};
