import React from 'react';

import ProductBlock from '../../productBlock/index';

const Search = ({arr}) => {
    const machedArray = JSON.parse(window.localStorage.getItem('machedArray'));
    return(
            <div className="wrapper">
                {
                    machedArray && machedArray.map( ( item, key ) => {
                        return(
                            <ProductBlock
                                path={(item.cooling ? "computers" : item.camera ? 'phones' : 'laptops')}
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
    )
}
export default Search