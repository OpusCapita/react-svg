import React, { Component, PropTypes } from 'react';
import './ClearableInput.less';

export default
class ClearableInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange(event) {
    if (this.props.inputSpecificProps.onChange) {
      this.props.inputSpecificProps.onChange(event.target.value, event);
    }
    this.setState({ inputValue: event.target.value });
  }

  handleClear() {
    if (this.props.onClear) {
      this.props.onClear();
    }
    if (this.props.inputSpecificProps.onChange) {
      this.props.inputSpecificProps.onChange('');
    }
    this.setState({ inputValue: '' });
  }

  render() {
    let inputClassName = `clearable-input__input ${this.props.inputSpecificProps.className || ''}`;
    let clearZoneClassName = `clearable-input__clear-zone ${this.props.clearZoneSpecificProps.className || ''}`;
    let clearClassName = `clearable-input__clear ${this.props.clearSpecificProps.className || ''}`;
    let clearZone = this.state.inputValue || this.props.showClearBtn ? (
      <span
        { ...this.props.clearZoneSpecificProps }
        className={clearZoneClassName}
        onClick={this.handleClear.bind(this)}
      >
        <span { ...this.props.clearSpecificProps } className={clearClassName}>×</span>
      </span>
    ) : null;

    let inputProps = {
      ...this.props.inputSpecificProps,
      value: this.state.inputValue,
      className: inputClassName,
      onChange: this.handleInputChange.bind(this),
      ref: ref => this.props.onRef(ref)
    };

    // ValueLink bug fix. Remove it if react version >= 15.0.0
    if (this.props.inputSpecificProps.valueLink) {
      delete inputProps.onChange;
      delete inputProps.value;
    }

    let input = React.createElement('input', inputProps);

    return (
      <div className="clearable-input">
        {input}
        {clearZone}
      </div>
    )
  }
}


ClearableInput.propTypes = {
  clearSpecificProps: PropTypes.object,
  clearZoneSpecificProps: PropTypes.object,
  clearable: PropTypes.bool,
  inputSpecificProps: PropTypes.object,
  onClear: PropTypes.func,
  onRef: PropTypes.func,
  showClearBtn: PropTypes.bool
};

ClearableInput.defaultProps = {
  clearSpecificProps: {},
  clearZoneSpecificProps: {},
  clearable: true,
  inputSpecificProps: {
    isShowClearBtn: false,
  },
  onRef: () => {},
  type: 'text'
};
