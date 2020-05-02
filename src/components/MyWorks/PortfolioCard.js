import React from 'react'
//import Bounce from 'react-reveal/Bounce'
//import Fade from 'react-reveal/Flip';
//import Zoom from 'react-reveal/Zoom';

//const { image, title, subTitle } = props

function PortfolioCard(props) {

    const { image, title } = props

    return (

        // <Bounce bottom>
        //     <div style={{ width: "33%", height: "420px", borderRadius: "20px" }}>
        //         <div className="m-3">
        //             <Card>
        //                 <Card.Img src={image} />
        //             </Card>
        //             <h6 style={{ textAlign: 'center', fontWeight: 'bold', margin: '15px 0 0 0' }}>{title}</h6>
        //             <p style={{ textAlign: 'center', color: 'grey', fontSize: '14px' }}>{subTitle}</p>
        //         </div>
        //     </div>
        // </Bounce>

        //<Zoom duration={1800}>
        <div className="item">
            <div style={{ position: 'relative' }} >
                <div class="blog-card">
                    <img src={image} alt="" style={{ width: '100%', height: '100%' }} />
                    <div class="title-contentUp">
                        <h3><a href="!#" target='_blank'>{title}</a></h3>
                        <h4><a href="!#" target='_blank'>{title}</a></h4>
                    </div>

                    <div class="card-info">
                        <a href="!#"><i className="fas fa-eye"></i> &nbsp; Project <span class="licon icon-arr icon-black"></span></a>
                        <a href="!#"><i className="fab fa-github"></i> &nbsp; GitHub<span class="licon icon-arr icon-black"></span></a>
                    </div>
                    <div class="gradient-overlay"></div>
                    <div class="color-overlay"></div>
                </div>
            </div>
        </div>
        //</Zoom>

    )
}

export default PortfolioCard
