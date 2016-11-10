import React, { Component, PropTypes } from 'react';
import './ChristmasSVG.less';

export default
class ChristmasSVG extends Component {
  render() {
    return (
      <div className="christmas-svg-bg">
        <div className="christmas-svg">
          <svg viewBox="0 0 800 600">
            <symbol id="s-text">
              <text
                textAnchor="middle"
                x="64%"
                y="35%"
                className="text--line"
              >
                Opus
              </text>
              <text textAnchor="middle"
                    x="50%"
                    y="86.7%"
                    className="text--line2"
              >
                Capita
              </text>
            </symbol>

            <clippath id="cp-text">
              <text textAnchor="middle"
                    x="64%"
                    y="35%"
                    className="text--line"
              >
                Opus
              </text>
              <text
                textAnchor="middle"
                x="50%"
                y="86.7%"
                className="text--line2"
              >
                Capita
              </text>
            </clippath>

            <pattern
              id="p-dottes"
              width="50"
              height="50"
              viewBox="0 0 100 100"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="100%"
                height="100%"
                fill="hsl(10,100%,55%)"
              >
              </rect>

              <g fill="#FFF">
                <circle r="15" cx="20" cy="20"></circle>
                <circle r="22" cx="70" cy="70"></circle>
              </g>

            </pattern>

            <use
              xlinkHref="#s-text"
              className="text-copy--shadow">
            </use>

            <use
              xlinkHref="#s-text"
              className="text-copy"
            >
            </use>

            <g clipPath="url(#cp-text)">
              <circle
                r="100%"
                cx="50%"
                cy="50%"
                className="r-fill--color"
              >
              </circle>
              <circle
                r="100%"
                cx="50%"
                cy="50%"
                className="r-fill"
              >
              </circle>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
