import React from 'react';

import ProductBlock from '../../productBlock/index'

import { sales } from '../../../databases/index';


const Sales = () => {
    return (
           <div className="container">
                <div className="wrapper">
                    <div>
                        {
                            sales.map((item, key) => {
                                return(
                                    <ProductBlock
                                    path={"laptops"}
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
            </div>
    )
}
export default Sales