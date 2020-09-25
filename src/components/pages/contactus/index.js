import React, {useState} from 'react';
import { Helmet } from 'react-helmet'

import  LinkOptions from '../../linkOptions/index';


import Dan from '../../../images/Dan.jpg';
import Maxim from '../../../images/Maxim.jpg';
// import Dima from '../../../images/Dima.jpg';

import './styles.scss';


const ContactUs = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const sayThanks = () => {
        if(name && message){
            window.alert('Thank you for sharing!');
        }else{
            window.alert('Fill up all inputs')
        }
    }
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
                            <img src={Maxim} alt="member"/>
                            <h2>Tarasov Dmitrii</h2>
                            <h3>Project manager</h3>
                            <a href="tel:+380957477348" className="button">+380957477348</a>
                        </div>
                    </div>
                </div>
            </section>
            <LinkOptions />
            <section className="contacts">
                <div className="container">

                    <div className="contacts-content">
                        <div className="heading">
                            <h1>Call us right now</h1>
                        </div>
                        <div className="contacts-content-numbers">
                            <div className="contacts-wrapper">
                                <div>
                                    <h2>Hot line</h2>
                                    <a href="tel:0 800 753 853">0 800 753 853</a>
                                    <h4>Free within Ukraine from landline and mobile from 8:00 to 21:00 (seven days a week)</h4>
                                </div>
                                <div>
                                    <h2>Service center</h2>
                                    <a href="tel:+380957477348">+38 (095) 747 73 48</a>
                                </div>
                            </div>
                            <div className="contacts-wrapper">
                                <div>
                                    <h2>Kiev</h2>
                                    <h4><a href="https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%BE-%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82/@50.4655085,30.6358208,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf1382a1bdad:0xf0f8f91b332d722a!8m2!3d50.4655085!4d30.6380095">Korpus A, Lioto ave, 19, Kiev, 02000</a></h4>
                                </div>
                                <div>
                                    <h2>Contacts</h2>
                                    <a href="tel:+380957477348">+38(095) 747 73 48</a><br/>
                                    <a href="tel:+380957477348">+38(095) 747 73 48</a><br />
                                    <a href="tel:+380957477348">+38(095) 747 73 48</a><br />
                                </div>
                            </div>
                            <a href="mailto:daniilmaksimovich2000@gmail.com">daniilmaksimovich2000@gmail.com</a>
                        </div>
                    </div>
                    <div className="contacts-content hidden">
                        <div className="heading">
                            <h1>Send us a message</h1>
                        </div>

                        <div className="contacts-content-message">
                            <label>
                                From:
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </label>
                            <label>
                                Message:
                                <textarea
                                    type="text"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                />
                            </label>
                        </div>
                        <div className="heading">
                            <button onClick={sayThanks} className="button">Send message</button>
                        </div>
                    </div>

                </div>
            </section>
            
        </>
    )
}
export default ContactUs
