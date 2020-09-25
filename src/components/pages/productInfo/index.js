import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ImageLoader from '../../imageLoader';

import useFormHandler from '../../../helpers/useHandler';

import { laptops , computers, phones } from '../../../databases/index';

import './styles.scss';

const ProductInfo = ({location}) => {
    
    const [styles, setStyles] = useState('none');
    const [bought, setBought] = useState(false)
    const pattern = /[0-9]/g;

    let arr = [];

    const path = location.pathname;
    if (path.match('computers')) {
        arr = computers;
    } else if (path.match('laptops')){
        arr = laptops;
    } else{
        arr = phones
    }

    const id = path.match(pattern).join('');
    const nullsArr = arr && arr.map(item => {
        return item.id === id ? item : null
    })

    let machedObj = nullsArr.filter(item => {
        return item !== null
    })
    machedObj = machedObj[0];

    const showModal = () => {
        setStyles('block');
    }

    const hideModal = () => {
        setStyles('none');
    }

    const preventClick = (e) => {
        e.stopPropagation();
    }
    
    const [values, changeHandler] = useFormHandler()
    
    const buyGadget = (e) => {
        if (values.fullName && values.city && values.post && values.number) {
            let regExp = /(\+380)[0-9]{9}\b/g;
            if (values.number.match(regExp)){
                const summ = localStorage.getItem('sum') ? parseInt(window.localStorage.getItem('sum')) : 0;
                localStorage.setItem('sum', summ + parseInt(machedObj.price));
                setTimeout(() => {setStyles({ display: 'none' })}, 4000);
                setBought(true);
            } else{
                e.preventDefault();
                window.alert('Your number is incorrect')
            }
        } else{
            e.preventDefault();
            window.alert('You shoud fill up all inputs')
        }
    }

    const buyMore = () => {
        setBought(false)
    }

    return (
        <>
            <Helmet>
                <title>{machedObj.name}</title>
            </Helmet>
            <section className="product_info">
                <div className="container">
                    <div className="heading">
                        <h1>{ machedObj.name }</h1>
                    </div>
                    <ImageLoader
                        path={machedObj.img}
                        styles={{height: '400px'}}
                    />
                    <div className="product_info-content">
                        <h1>{ machedObj.name }</h1>
                        <h2><b>Processor: </b> {machedObj.cpu}</h2>
                        <h2><b>RAM: </b>{machedObj.ram}</h2>
                        {machedObj.diagonal && <h2><b>Screen: </b>{machedObj.diagonal}</h2>}
                        {machedObj.motherboard && <h2><b>Mother board: </b>{machedObj.motherboard}</h2>}
                        {machedObj.cooling && <h2><b>Cooling: </b>{machedObj.cooling}</h2>}
                        {machedObj.graphics && <h2><b>Videocart: </b>{machedObj.graphics}</h2>}
                        {machedObj.camera && <h2><b>Camera: </b>{machedObj.camera}</h2>}
                        <h2><b>Memory: </b>{machedObj.memory}</h2>
                        {machedObj.ssd && <h2><b>SSD: </b>{machedObj.ssd}</h2>}
                        {machedObj.power && <h2><b>Power: </b>{machedObj.power}</h2>}
                        <div className="button_wrapper">
                            <h3>{machedObj.lastPrice && machedObj.lastPrice}</h3>
                            <button onClick={showModal}>{machedObj.price}</button>
                        </div>
                    </div>
                </div>

            </section>
            
            <section onClick={hideModal} style={{display: styles}} className="modal">
                <div onClick={preventClick} className="modal-main_content">
                    {!bought ? (
                        <div className="form">
                            <div className="heading">
                                <h1>Fill up the form</h1>
                            </div>
                            <div className="form-input">
                                <label>
                                    Full name
                                    <input type="text"
                                        name="fullName"
                                        value={values.fullName}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label>
                                    City
                                    <input type="text"
                                        name="city"
                                        value={values.city}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label>
                                    Post office
                                    <input type="text"
                                        name="post"
                                        value={values.post}
                                        onChange={changeHandler}
                                    />
                                </label>
                                <label>
                                    Phone number
                                    <input type="text"
                                        name="number"
                                        value={values.number}
                                        onChange={changeHandler}
                                    />
                                </label>
                            </div>
                            <button className="button" onClick={buyGadget}>Buy!</button>
                        </div>
                    ) : <div className="heading">
                            <h1>
                                Congratulations!
                            </h1>
                            <h2>Our managers will contact you to agree on the delivery.</h2>
                            <button className="button" onClick={buyMore}>Buy more</button>
                        </div>}
                </div>
            </section>
        </>
    )
}


ProductInfo.propTypes = {
    location: PropTypes.object.isRequired,
}
ProductInfo.defaultProps = {
    location: ''
}

export default ProductInfo