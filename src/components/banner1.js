import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-thq-max-width-elm thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner1-text3">Welcome to Our Website</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner1-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner1-text4">
                  Discover the best products and services tailored for you
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner1-text5">Explore Now</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
      <div className="banner1-container3"></div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
  action1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  action1: PropTypes.element,
}

export default Banner1
