import React from 'react';
import { Helmet } from 'react-helmet';

import ProductBlock from '../../productBlock/index';

import { computers } from '../../../databases/index';


const Computers = ({history}) => {
    const path = history.location.pathname;
    return (
        <>
            <Helmet>
                <title>Computers</title>
            </Helmet>
            <div className="container">
                <div className="wrapper">
                    {
                        computers.map((item, key) => {
                            return (
                                <ProductBlock
                                    id={item.id}
                                    path={path}
                                    key={key}
                                    image={item.img}
                                    name={item.name}
                                    body={item.body}
                                    graphics={item.graphics}
                                    model={item.model}
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
export default Computers