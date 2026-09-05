import React, { useState, Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import ContactForm2 from '../components/contact-form2'
import './home.css'

const Home = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <div className="home-container10">
      <Helmet>
        <title>NuggetCraft SMP</title>
        <meta property="og:title" content="NuggetCraft SMP" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="NuggetCraft SMP" />
        <link rel="canonical" href="https://kcserver.cc/" />
        <meta property="og:url" content="https://kcserver.cc/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{"@context":"https://schema.org","@type":"Organization","name":"NuggetCraft SMP","url":"kcserver.cc"}',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{"@context":"https://schema.org","@type":"WebSite","name":"NuggetCraft SMP","url":"kcserver.cc"}',
          }}
        />
      </Helmet>
      <Banner1
        action1={
          <Fragment>
            <span className="home-text10">Rules</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text11">
              Explore the rules, latest news, and more!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text12">Welcome to NuggetCraft SMP</span>
          </Fragment>
        }
        rootClassName="banner1root-class-name"
      ></Banner1>
      <div className="home-thq-team1-elm thq-section-padding">
        <div className="home-thq-max-width-elm thq-section-max-width">
          <h2 className="home-thq-text-elm1 thq-heading-2">Meet the Admins</h2>
          <p className="home-thq-text-elm2 thq-body-large">
            We aim to bring, fun, excitement, and justice to the server, no
            matter who is on the receiving end.
          </p>
          <div className="home-thq-content-elm1">
            <div className="home-thq-content-elm2">
              <div className="home-thq-row-elm1">
                <div className="home-container11">
                  <div className="home-thq-card-elm1">
                    <div className="home-container12">
                      <img
                        alt="Image of John Doe"
                        src="/my%20pfp-200h.png"
                        className="home-thq-placeholder-image-elm1 thq-img-round thq-img-ratio-1-1"
                      />
                    </div>
                    <div className="home-thq-title-elm1">
                      <span className="home-thq-text-elm3 thq-body-small">
                        TheMandolorian7
                      </span>
                      <span className="home-thq-text-elm4 thq-body-small">
                        <span>Server Founder &amp; Owner</span>
                        <br></br>
                      </span>
                    </div>
                    <span className="home-thq-text-elm5 thq-body-small">
                      <span>
                        As Owner of NuggetCraft SMP, TheMandolorian7 strives to
                        keep uptime to a maximum while also preventing rules
                        from being broken
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-thq-card-elm2">
                    <div className="home-container13">
                      <img
                        alt="Image of John Doe"
                        src="/avatar-full-200h.png"
                        className="home-thq-placeholder-image-elm2 thq-img-round thq-img-ratio-1-1"
                      />
                    </div>
                    <div className="home-thq-title-elm2">
                      <span className="home-thq-text-elm6 thq-body-small">
                        SkywardOcean15
                      </span>
                      <span className="home-thq-text-elm7 thq-body-small">
                        <span>Official Server Helper</span>
                        <br></br>
                      </span>
                    </div>
                    <span className="home-thq-text-elm8 thq-body-small">
                      <span>
                        This is where the bio will go. ya ya ya  yaay u u u u u
                        u u u u u u u u u u u u
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-thq-row-elm2">
                <div className="home-container14"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm2
        content1={
          <Fragment>
            <span className="home-text21">
              <span>
                We handpick players for our server to create the best community 
              </span>
              <span>that we possibly can.</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text25">Apply To Join</span>
          </Fragment>
        }
        rootClassName="contact-form2root-class-name"
      >
        <div data-thq="thq-tabs" className="home-thq-tabs-elm">
          <div data-thq="thq-tabs-bar" className="home-thq-tabs-bar-elm">
            <div
              data-thq="thq-tab-trigger"
              data-tab-index="0"
              id="thq_thq-tab-trigger_Uazc"
              className="home-thq-tab1-trigger-elm"
            >
              <span>Tab 1</span>
            </div>
            <div
              data-thq="thq-tab-trigger"
              data-tab-index="1"
              id="thq_thq-tab-trigger_J2hH"
              className="home-thq-tab2-trigger-elm"
            >
              <span>Tab 2</span>
            </div>
            <div
              data-thq="thq-tab-trigger"
              data-tab-index="2"
              id="thq_thq-tab-trigger_zybF"
              className="home-thq-tab3-trigger-elm"
            >
              <span>Tab 3</span>
            </div>
          </div>
          {activeTabIndex === 0 && (
            <div
              data-thq="thq-tab-content"
              data-tab-index="0"
              className="home-thq-tab1-content-elm"
            >
              <div></div>
            </div>
          )}
          {activeTabIndex === 1 && (
            <div
              data-thq="thq-tab-content"
              data-tab-index="1"
              className="home-thq-tab2-content-elm"
            >
              <div></div>
            </div>
          )}
          {activeTabIndex === 2 && (
            <div
              data-thq="thq-tab-content"
              data-tab-index="2"
              className="home-thq-tab3-content-elm"
            >
              <div></div>
            </div>
          )}
        </div>
      </ContactForm2>
      <div className="home-container18">
        <div className="home-container19">
          <Script
            html={`<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSd2kHWBei7L2JYEsP3tOi8lQ3P_k2VRDUGBvwyot_7SYJNQHQ/viewform?embedded=true"
  width="500" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link">
        <div aria-label="Sign up to TeleportHQ" className="home-container20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text26">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
