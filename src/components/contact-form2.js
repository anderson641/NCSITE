import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form2.css'

const ContactForm2 = (props) => {
  return (
    <div
      className={`contact-form2-thq-contact5-elm thq-section-padding ${props.rootClassName} `}
    >
      <h2 className="thq-heading-2">
        {props.heading1 ?? (
          <Fragment>
            <span className="contact-form2-text5">
              <span>Apply To  Join</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </h2>
      <span className="thq-body-large">
        {props.content1 ?? (
          <Fragment>
            <span className="contact-form2-text1">
              <span>
                We handpick players for our server to create the best community 
              </span>
              <span>that we possibly can.</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

ContactForm2.defaultProps = {
  rootClassName: '',
  content1: undefined,
  heading1: undefined,
}

ContactForm2.propTypes = {
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default ContactForm2
