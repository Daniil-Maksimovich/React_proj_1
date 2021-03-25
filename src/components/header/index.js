import React, {useState} from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { NavLink, Link } from 'react-router-dom';

import Footer from '../footer/index';

import { laptops, computers, phones } from '../../databases/index';

import '../../styles/common.scss';
import './styles.scss';
import '../pages/productInfo/styles.scss'


const Header = ({children}) => {

    const [ value, setValue ] = useState('');
    const gadgets = laptops.concat(computers.concat(phones));

    const handleChange = e => {
        setValue(e.target.value.toLowerCase());
    }
    const searchData = e => {
        if(value){
            const machedArr = gadgets.filter(item => {
                if (item.name.toLocaleLowerCase().indexOf(value) !== -1) return true;
                return false;
            })
            window.localStorage.setItem('machedArray', JSON.stringify(machedArr));
            setValue('');
        } else e.preventDefault();
    }
    const pressEnter = e => e.which === 13 && document.querySelector("#searchButton").click();
    
    const navigationList = document.querySelector('.header-navigation-menu-burger_menu-nav');
    const [menu , setMenu] = useState(null);
    const collapseMenu = e => {
        const mainMenu = e.target.parentElement.parentElement.className.includes('header-navigation-menu-burger_menu') ? e.target.parentElement.parentElement : e.target.parentElement;
        setMenu(mainMenu);
        mainMenu.classList.toggle("burger_menu-active");
    }
    const hideMenu = () => menu && menu.classList.remove("burger_menu-active");
    
    navigationList && navigationList.addEventListener('click', e =>  e.target.tagName === 'A' && hideMenu() );
    return(
        <>
            <header className="header">
                <div className="container">

                    <div className="header-search">
                        <div className="logo">
                            <h1>eStore</h1>
                        </div>
                        <div className="header-search-input">
                            <input type="text"
                                onChange={handleChange}
                                onKeyPress={pressEnter} 
                                value={value}
                                placeholder="Search gadget"
                            />
                            <button><Link to="/search" id="searchButton" onClick={searchData}><FontAwesomeIcon icon={faSearch} /></Link></button >
                        </div>
                        <NavLink to="/bag" className="header-search-bag">
                            <FontAwesomeIcon icon = {faShoppingBasket}/>
                        </NavLink>
                    </div>
                </div>
                    <nav className="header-navigation">
                        <div className="container">
                            <ul className="header-navigation-list">
                                <li><Link to="/">HOME</Link></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/sales">SALES</NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/computers">COMPUTERS</NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/laptops">LAPTOPS</NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/phones">PHONES</NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/contactus">CONTACTS</NavLink></li>
                            </ul>
                            <div className="header-navigation-menu-burger_menu">
                                <span onClick={collapseMenu} className="header-navigation-menu-burger_menu-button">
                                    <span className="header-navigation-menu-burger_menu-lines"></span>
                                </span>
                                <nav className="header-navigation-menu-burger_menu-nav">
                                    <ul>
                                        <li><NavLink to="/home">HOME</NavLink></li>
                                        <li><NavLink to="/sales">SALES</NavLink></li>
                                        <li><NavLink to="/computers">COMPUTERS</NavLink></li>
                                        <li><NavLink to="/laptops">LAPTOPS</NavLink></li>
                                        <li><NavLink to="/phones">PHONES</NavLink></li>
                                        <li><NavLink to="/contactus">CONTACT US</NavLink></li>
                                    </ul>
                                </nav>
                                <div onClick={hideMenu} className="header-navigation-menu-burger_menu-overlay"></div>
                            </div>
                        </div>
                    </nav>
            </header>
            <div className="main_content">
                {children}
            </div>
            <Footer/>
        </>
    )
}
Header.propTypes = {
    children: PropTypes.any.isRequired
}

export default Header 