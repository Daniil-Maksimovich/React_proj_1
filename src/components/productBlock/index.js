import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageLoader from '../imageLoader/index';

import './styles.scss';

const ProductBlock = ({ path, image, alt, id, name, body, graphics, price }) => (
    <Link className="product_block" to={`${path}/${id}`}>
        <ImageLoader 
            path={image}
            alt={alt}
        />
        <div className="product_block-content" >
            <div>
                <h2>
                    {name}
                    {body}
                    {graphics}
                </h2>
            </div>
            <div className="product_block-content-button">
                <h2>{price}</h2>
                <button className="button">BUY NOW</button>
            </div>
        </div>
    </Link>
);

ProductBlock.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    path: PropTypes.string.isRequired
}
ProductBlock.defaultProps = {
    name: 'test ',
    price: '2000',
    image: `https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg`,
    alt:'device'
}
export default ProductBlock