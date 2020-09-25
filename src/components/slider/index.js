import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ImageLoader from '../imageLoader/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


import './styles.scss';

const Slider = ({arr}) => {
    
    const [x, setX] = useState(0);
    const goPrev = () => {
        x === 0 ? setX(-100 * (arr.length - 1)) : setX(x + 100);
    }
    const goNext = () => {

        (x === -100 * (arr.length - 1)) ? setX(0) : setX(x - 100);
    }

    return(
        <section className="slider">
            {
                arr && arr.map((item, key) => {
                    return(
                        <div key={key} className="slide" style={{transform:`translateX(${x}%)`}} to="/sales">
                            <div className="container">
                                <ImageLoader 
                                    path={item.img} 
                                    alt='gatget' 
                                    loaderGif="https://www.houseofdestiny.org/wp-content/uploads/2020/01/ring-loader.gif"
                                />
                                <div className="slider-content">
                                    <h1>{item.name}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora modi sit magnam fugit dignissimos deleniti animi reprehenderit illum rem saepe!</p>
                                    <h3>{item.lastPrice}</h3>
                                    <h2>{item.price}</h2>
                                    <button to="/sales" className="slider-content-btn"><Link to="/sales">Show more</Link></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <button className="slider_button prev" onClick={goPrev}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
            <button className="slider_button next" onClick={goNext}><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
        </section>
    )
}
Slider.propTypes = {
    imgArr: PropTypes.array.isRequired
}
Slider.defaultProps = {
    imgArr: []
}
export default Slider