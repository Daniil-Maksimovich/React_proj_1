import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ImageLoader from '../../imageLoader/index';

import './styles.scss';

const Bag = () => {
    const bagCont = React.createRef();
    let buys = window.localStorage.getItem('buys') ? JSON.parse(window.localStorage.getItem('buys')) : [];
    buys = buys.length ? buys.map(item => {item.deleted = false; return item}) : buys;

    const removeBagItem = e => {
        if(e.target.dataset.id){
            buys = JSON.parse(window.localStorage.getItem('buys')).map(item => {item.deleted = false; return item});
            e.target.parentElement.parentElement.classList.add('deleted');
            const newBuys = buys.filter(item => e.target.dataset.id === item.id && e.target.dataset.type === item.type ? null : item);
            window.localStorage.setItem('buys', JSON.stringify(newBuys));
            if(!newBuys.length){
                setTimeout(() => {
                    bagCont.current.innerHTML = '<h1>No buys</h1>';
                }, 700);
            }
        }
    }
    return (
        <>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <section className="bag">
                <div className="container" ref={bagCont}>
                    {
                        buys.length ? 
                            <div>
                                {
                                    buys.map((item, key) => (
                                        <div className="bag__item" onClick={removeBagItem} key={key}>
                                            <div className="bag__item__img">
                                            <ImageLoader 
                                                path={item.img}
                                                alt="good"
                                            />
                                            </div>
                                            <div className="bag__item__content">
                                                <h2>{item.name}</h2>
                                                <b>Count: {item.count}</b> <br/>
                                                <b>Price: {item.price}</b> <br/>
                                                <Link to={`/${item.type}/${item.id}`}>Follow</Link>
                                            </div>
                                            <div className="bag__item__del">
                                                <button className="button" data-id={item.id} data-type={item.type}>Cancel</button>
                                            </div>
                                        </div>
                                    ))
                                }
                                <Link className="button" to="/booking">Buy!</Link>
                            </div>
                        : <h1>No buys</h1>
                    }
                </div>
            </section>
    </>
  )
}

export default Bag