import React, { Component, Fragment } from 'react';
import '../scss/main.css'
import { portfolioData } from '../../data'
import PortfolioCard from './PortfolioCard';

import $ from 'jquery'

//import Fade from 'react-reveal/Fade';
//import Zoom from 'react-reveal/Zoom';
//import Slide from 'react-reveal/Slide';
//import Bounce from 'react-reveal/Bounce';
// a tag'lerinde target='_blank' link yeni sayfada aciliyor


class MyWorks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            category: []
        }
    }

    clickHandler = (parametre) => {

        if (parametre !== 'all') {
            this.setState(() => {
                const newCategories = portfolioData.cards.filter(item => item.category === parametre)
                return {
                    category: newCategories // newCategories clickledigimiz basliklarin ismini tutuyor
                }
            })
        } else {
            this.setState(() => {
                return {
                    category: portfolioData.cards
                }
            })
        }
    }

    render() {

        // burayi my work kismindaki basliklara tiklayinca, basliklarin rengini ve alt cizgiyi olusturmak icin yazdim
        $(document).on('click', 'ul li', function () {
            $(this).addClass('active').siblings().removeClass('active')
        })

        return (
            <body>
                <main id="work">
                    <h1 className="lg-heading">
                        My <span className="text-secondary">Work</span>
                        {/* <!-- soyadin farkli renkte olmasi icin bu sekilde span tag'leri arasina yaziyorum --> */}
                    </h1>
                    <h2 className="sm-heading">
                        Check out some of my projects...
                    </h2>

                    <div className="categoryHeadBox text-center w-100">
                        <ul>
                            {
                                portfolioData.categories.map((item, index) =>
                                    <li
                                        key={index}
                                        className="port-cat"
                                        onClick={() => this.clickHandler(item)} // burasi onemli dakika 1.30 da aciklamasi
                                    >
                                        {item.toLocaleUpperCase()}
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="projects">

                        {
                            this.state.category.length === 0 ?
                                (
                                    <Fragment>
                                        {
                                            portfolioData.cards.map((item, index) =>
                                                <PortfolioCard
                                                    key={index}
                                                    {...item}
                                                />
                                            )
                                        }
                                    </Fragment>
                                )
                                :
                                (
                                    <Fragment>
                                        {
                                            this.state.category.map((item, index) =>
                                                <PortfolioCard
                                                    key={index}
                                                    {...item}
                                                />
                                            )
                                        }
                                    </Fragment>
                                )
                            // burdaki item soldaki arrow function'daki item. baska bisey yazsaydim buraya da onu yazacaktim
                        }

                    </div>
                </main>

                <footer id="main-footer">
                    Copyright &copy; 2020
                </footer>
            </body>
        )
    }
}

export default MyWorks;
