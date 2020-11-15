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

    const [summ, setSum] = useState(0);
    setInterval(() => {
        const sum = localStorage.getItem('sum');
        setSum(sum);
    }, 1000);
    const [ value, setValue ] = useState('');
    const gadgets = laptops.concat(computers.concat(phones))
    const boughtGadgets = window.localStorage.getItem('gadgets');
    console.log(JSON.parse(boughtGadgets));

    const handleChange = (e) => {
        setValue(e.target.value.toLowerCase());
    }
    const searchData = (e) => {
        if(value){
            const machedArr = gadgets.filter(item => {
                if (item.name.toLocaleLowerCase().indexOf(value) !== -1) {
                    return true
                }
                return false
            })
            window.localStorage.setItem('machedArray', JSON.stringify(machedArr));
            setValue('')
        } else{
            e.preventDefault()
        }
    }
    const pressEnter = (e) => {
        if (e.which === 13) {
            document.querySelector("#searchButton").click();
        }
    }
    const showConfirm = () => {
        if (localStorage.getItem('sum') !== "0"){
            let result = window.confirm('Do you really want to delete your purchases?');
            if(result){
                localStorage.setItem('sum' , 0);
            }
        }
    }
    const navigationList = document.querySelector('.header-navigation-menu-burger_menu-nav');
    const mainMenu = document.querySelector('.header-navigation-menu-burger_menu');
    const collapseMenu = () => {
        if (mainMenu.className.match(/burger_menu-active/g)) {
            navigationList.style.display = 'none';
        } else {
            navigationList.style.display = 'flex';
        }
        mainMenu.classList.toggle("burger_menu-active");
    }
    const hideMenu = () => {
        navigationList.style.display = 'none';
        mainMenu.classList.toggle("burger_menu-active");
    }
    navigationList && navigationList.addEventListener('click', e => {
        if(e.target.tagName === 'H2'){
            hideMenu()
        }
    })
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
                        <div className="header-search-bag">
                            <FontAwesomeIcon icon = {faShoppingBasket}/>
                            <h1 onClick={showConfirm}>${summ ? summ : 0}</h1>
                        </div>
                    </div>
                </div>
                    <nav className="header-navigation">
                        <div className="container">
                            <ul className="header-navigation-list">
                                <li><NavLink to="/home"><h2>HOME</h2></NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/sales"><h2>SALES</h2></NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/computers"><h2>Computers</h2></NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/laptops"><h2>LAPTOPS</h2></NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/phones"><h2>PHONES</h2></NavLink></li>
                                <li><div className="header-navigation-border"></div></li>
                                <li><NavLink to="/contactus"><h2>CONTACTS</h2></NavLink></li>
                            </ul>
                            <div className="header-navigation-menu-burger_menu">
                                <span onClick={collapseMenu} className="header-navigation-menu-burger_menu-button">
                                    <span className="header-navigation-menu-burger_menu-lines"></span>
                                </span>
                                <nav id="nav" className="header-navigation-menu-burger_menu-nav">
                                    <ul>
                                        <li><NavLink to="/home"><h2>HOME</h2></NavLink></li>
                                        <li><NavLink to="/sales"><h2>SALES</h2></NavLink></li>
                                        <li><NavLink to="/computers"><h2>Computers</h2></NavLink></li>
                                        <li><NavLink to="/laptops"><h2>LAPTOPS</h2></NavLink></li>
                                        <li><NavLink to="/phones"><h2>PHONES</h2></NavLink></li>
                                        <li><NavLink to="/contactus"><h2>contact US</h2></NavLink></li>
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