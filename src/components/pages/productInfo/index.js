import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

import ImageLoader from '../../imageLoader';

import { laptops , computers, phones } from '../../../databases/index';

import './styles.scss';

const ProductInfo = ({location}) => {
    
    const pattern = /[0-9]/g;
    let arr = [];
    const path = location.pathname;
    let type = '';
    
    if (path.match('computers')) {
        type = 'computers';
        arr = computers;
    } else if (path.match('laptops')){
        type = 'laptops';
        arr = laptops;
    } else{
        type = 'phones';
        arr = phones;
    }
    const modal = React.createRef();
    const closeModalBtn = React.createRef();
    
    const id = path.match(pattern).join('');
    const machedObj = arr && arr.map(item => item.id === id ? item : null).filter(item => item !== null)[0];
    
    const buyGadget = () => {
        modal.current.style.display = 'flex';
        setTimeout(() => {
            modal.current.classList.add('shown');
        },100);
        const buys = JSON.parse(window.localStorage.getItem('buys')) || [];
        const buy = {
            id: machedObj.id,
            img: machedObj.img,
            name: machedObj.name,
            price: machedObj.price,
            count: 1,
            type: type
        }
        const index = buys.findIndex(item => item.id === machedObj.id && item.name === machedObj.name);
        if (index > -1) buys[index].count++;
        else buys.unshift(buy);
        window.localStorage.setItem('buys', JSON.stringify(buys));
    }
    const closeModal = e => {
        const {current} = modal;
        if(e.target === current || e.target === closeModalBtn.current){
            current.classList.remove('shown');
            setTimeout(() => {
                current.style.display = 'none';
            }, 250);
        }
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
                            <button onClick={buyGadget}>{machedObj.price}</button>
                        </div>
                    </div>
                </div>

            </section>
            <div className="popup" onClick={closeModal} ref={modal}>
                <div className="popup__content">
                    <h1>Your purchase is successfully added to basket</h1>
                    <b>You can see it in the <Link to="/bag">basket</Link></b>
                    <span ref={closeModalBtn}>+</span>
                </div>
            </div>
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