import React from 'react';

import ProductBlock from '../productBlock/index';

import { sales } from '../../databases/index';

import './styles.scss';

const FeaturedProducts = () => {
    return(
        <section className="featured_products">
            <div className="featured_products-heading">
                <div className="container">
                <h1>Featured products</h1>
                </div>
            </div>
            <div className="container">
                <div className="wrapper">
                    {
                        sales.map((item, key) => {
                            return (
                                <ProductBlock
                                    path="laptops"
                                    key={key}
                                    image={item.img}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default FeaturedProducts