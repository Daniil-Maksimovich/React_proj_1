import React from 'react';
import { Helmet } from 'react-helmet';

import ProductBlock from '../../productBlock/index'

import { phones } from '../../../databases/index'

const Phones = () => {
    return (
        <> 
            <Helmet>
                <title>Phones</title>
            </Helmet>
            <div className="container">
                <div className="wrapper">
                    {
                        phones.map((item, key) =>{
                            return(
                                <ProductBlock
                                    path="phones"
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
        </>
    )
}
export default Phones