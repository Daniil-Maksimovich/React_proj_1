import React from 'react';
import { Helmet } from 'react-helmet';

import Slider from '../../slider/index';
import LinkOptions from '../../linkOptions/index';
import FeaturedProducts from '../../featuredProducts/index';

import { sales } from '../../../databases/index';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Slider
                    arr={sales}
                />
                <LinkOptions styles={{height: '200px'}}/>
                <FeaturedProducts/>
            </div>
        </>
    )
}
export default Home
