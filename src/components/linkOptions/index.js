import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ImageLoager from '../imageLoader/index';

import './styles.scss';

const LinkOptions = ({styles}) => {
    return(
        <section className="link_options">
            <div className="container">
                <div className="link_options-option">
                    <ImageLoager styles={styles} path="https://sintetiki.net/images/product/12916/1144/Xiaomi-Mi-Gaming-Laptop.png" alt="product" />
                    <div className="link_options-option-content">
                        <h2>Laptops</h2>
                        <Link to="/laptops">Show more</Link>
                    </div>
                </div>
                <div className="link_options-option big">
                    <ImageLoager styles={styles} path="https://www.compday.ru/files/cat/184438.jpg" alt="product" />
                    <div className="link_options-option-content">
                        <h2>Computers</h2>
                        <Link to="/computers">Show more</Link>
                    </div>
                </div>
                <div className="link_options-option">
                    <ImageLoager styles={styles} path="https://www.notebookcheck-ru.com/fileadmin/Notebooks/Nubia/Red_Magic_3/3_1000x1000.png" alt="product" />
                    <div className="link_options-option-content">
                        <h2>Phones</h2>
                        <Link to="/phones">Show more</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
LinkOptions.propTypes ={
    styles: PropTypes.object
}
export default LinkOptions