import React from 'react';
import { Helmet } from 'react-helmet'

import  LinkOptions from '../../linkOptions/index';
import FuturedProducts from '../../featuredProducts/index';

import Dan from '../../../images/Dan.jpg';
import Maxim from '../../../images/Maxim.jpg';
import Dan_2 from '../../../images/Dan_2.jpg';

import './styles.scss';


const ContactUs = () => {
    return (
        <> 
            <Helmet>
                <title>Contact us</title>
            </Helmet>
            <section className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.6919573850378!2d30.636614749600447!3d50.465460673923836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf1382a1bdad%3A0xf0f8f91b332d722a!2z0JrQuNC10LLRgdC60LjQuSDQvdCw0YbQuNC-0L3QsNC70YzQvdGL0Lkg0YLQvtGA0LPQvtCy0L4t0Y3QutC-0L3QvtC80LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2sua!4v1600675174052!5m2!1sru!2sua" width="800" height="600" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" title="map" tabIndex="0" />
            </section>
            <section className="team">
                <div className="container">
                    <div className="heading">
                        <h1>Our Team</h1>
                    </div>
                    <div className="team-members">
                        <div className="team-members-member">
                            <img src={Maxim} alt="member" />
                            <h2>Badionniy Maxim</h2>
                            <h3>Back-end developer</h3>
                        <a href="tel:+380957477348" className="button">+380957477348</a>
                        </div>
                        <div className="team-members-member">
                            <img src={Dan} alt="member" />
                            <h2>Maksymovych Daniil</h2>
                            <h3>Front-end developer</h3>
                            <a href="tel:+380957477348" className="button">+380957477348</a>
                        </div>
                        <div className="team-members-member">
                            <img src={Dan_2} alt="member"/>
                            <h2>Tarasov Dmitrii</h2>
                            <h3>Project manager</h3>
                            <a href="tel:+380957477348" className="button">+380957477348</a>
                        </div>
                    </div>
                </div>
            </section>
            <LinkOptions />
            <FuturedProducts/>
        </>
    )
}
export default ContactUs
