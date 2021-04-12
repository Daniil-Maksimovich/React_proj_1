import React , { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import '../../styles/common.scss';

const ImageLoader = ({ path, alt, loaderGif }) => {
    const [ loaded, setLoaded ] = useState( false );
    const loadedImage = new Image();
    loadedImage.src = path;
    loadedImage.onload = () => {
        setLoaded(true);
    }
    loadedImage.onError = () => {
        setLoaded(false);
    }
    return(
        <div className="image_block">
            { loaded ? <img loading="lazy" src={path} alt={alt} /> : <img loading="lazy" src={loaderGif} alt="Loading"/> }
        </div>
    )
}
ImageLoader.propTypes = {
    path: PropTypes.string.isRequired,
    alt: PropTypes.string,
    loaderGif: PropTypes.string
}
ImageLoader.defaultProps = {
    path: `https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg`,
    alt: 'Gatget',
    loaderGif: `https://i.pinimg.com/originals/76/77/ed/7677edd5a44b10130b8824ca020ba60b.gif`,
}
export default ImageLoader