import React from 'react'
import '../scss/main.css'
import { aboutMeData } from '../../data'

//import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
//import Bounce from 'react-reveal/Bounce';  <Slide duration={1800} left> </Slide>

function AboutMe() {
    return (
        <body>
            <main id="about">

                <Zoom duration={1800} left>
                    <h1 className="lg-heading">
                        About <span className="text-secondary">Me</span>
                        {/*<!-- soyadin farkli renkte olmasi icin bu sekilde span tag'leri arasina yaziyorum -->*/}
                    </h1>
                </Zoom>

                <Zoom duration={1800} left>
                    {/* <Fade right big cascade> </Fade> */}
                    <h2 className="sm-heading">
                        Let me tell you a few things...
                    </h2>
                </Zoom>

                <div className="about-info">

                    <Zoom duration={1900}>
                        <img
                            src="/images/portrait_small.jpeg"
                            alt="Yavuz Gürdal"
                            className="bio-image"
                        />
                    </Zoom>

                    <Slide duration={1800} right>
                        <div className="bio">
                            <h3 className="text-secondary">BIO</h3>
                            <p>
                                I am a React web developer.
                        </p>
                        </div>
                    </Slide>

                    {
                        aboutMeData.aboutMeDivBox.map((item, index) =>

                            <Slide duration={1800} bottom>
                                <div key={index} className={item.divClassName}>
                                    <h3 className={item.h3ClassName}>{item.h3Title}</h3>
                                    <h6>{item.h6Title}</h6>
                                    <p>{item.pText}</p>
                                </div>
                            </Slide>
                        )
                    }

                </div>
            </main>

            <footer id="main-footer">
                Copyright &copy; 2020
            </footer>
        </body>
    )
}

export default AboutMe
