import React from 'react';
import { Helmet } from 'react-helmet';

import ProductBlock from '../../productBlock/index';

import { laptops } from '../../../databases/index';

const Laptops = ({history}) => {
    const path = history.location.pathname;
    return (
        <> 
            <Helmet>
                <title>Laptops</title>
            </Helmet>

            <div className="container">
                <div className="wrapper">
                    <div>
                        {
                            laptops.map((item, key) => {
                                return(
                                    < ProductBlock
                                    path={path}
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
        </>
    )
}
export default Laptops