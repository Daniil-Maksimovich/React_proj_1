import React, { useState } from 'react';
import Slider from "react-slick";
import { Helmet } from 'react-helmet';

import ImageLoader from '../../imageLoader/index';

import './styles.scss';

const Booking = () => {
  //slider

  let slidesLength = 0;
  const buys = window.localStorage.getItem('buys') ? JSON.parse(window.localStorage.getItem('buys')) : [];
  const windowWidth = window.innerWidth;

  if(windowWidth >= 1024) slidesLength = buys.length < 5 ? buys.length : 5;
  else if(windowWidth <= 1024 && windowWidth >= 600) slidesLength = buys.length < 2 ? buys.length : 2;
  else slidesLength = 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesLength,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
          slidesToShow: slidesLength,
          slidesToScroll: 2,
          infinite: true,
          dots: true
      }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: slidesLength,
            slidesToScroll: 1,
            dots: true
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: slidesLength,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    }
  ]};
  
  //popup

  const modal = React.createRef();

  const submitForm = e => {
    e.preventDefault();
    modal.current.style.display = 'flex';
    setTimeout(() => {
      modal.current.classList.add('shown');
    },100);
    setTimeout(() => {
      window.location = '/';
      window.localStorage.setItem('buys', '[]')
    }, 6000);
  }

  //form validation

  const useHandler = () => {
    const [value, setValue] = useState({
      name: '',
      surname: '',
      phone: '',
      country: '',
      city: ''
    });
    const changeHandler = e => {
      let pattern = '';
      if(e.target.name === 'phone'){
        pattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
      } else{
        pattern = /[a-zA-Z]{4}/g
      }
      e.target.className = pattern.test(e.target.value) ? 'valid' : 'invalid';
      setValue({
        ...value,
        [e.target.name]: e.target.value
      })
    }
    return [
      value,
      changeHandler
    ]
  }
  const [value, changeHandler] = useHandler();
  let sum = 0;
  buys.map(i => {sum += parseInt(i.price)});

  return (
    <section className="booking container">
      <Helmet>
        <title>Booking</title>
      </Helmet>
      <div className="heading">
        <h1>Your Purchases</h1>
      </div>
      <Slider {...settings}>
        {
          buys.length ? 
            buys.map((item, key) => (
              <div className="slide" key={key}>
                <ImageLoader path={item.img} alt="good"/>
                <b>{item.name}</b>
                <p>{item.price}</p>
              </div>
            ))
          : null
        }
      </Slider>
      <div class="form-wrapper">
        <div className="heading">
         <h1 class="tac">Fill the form to buy all the goods for: {sum}$</h1>
        </div>
        <form action="#" class="form" onSubmit={submitForm}>
          <label>
            First name:
            <input onChange={changeHandler} placeholder="John" value={value.name} name="name" type="text" required />
          </label>
          <label>
            Last name:
            <input onChange={changeHandler} placeholder="Drown" value={value.surname} name="surname" type="text" required />
          </label>
          <label>
            Phone number:
            <input onChange={changeHandler} placeholder="07400 123456" value={value.phone} name="phone" type="number" required />
          </label>
          <label>
            Country:
            <input onChange={changeHandler} placeholder="England" value={value.country} name="country" type="text" required />
          </label>
          <label>
            City:
            <input onChange={changeHandler} placeholder="London" value={value.city} name="city" type="text" required />
          </label>
          <input type="submit" class="main-btn" value="Book!"/>
        </form>
      </div>
      <div className="popup" ref={modal}>
        <div className="popup__content">
          <h1>Congratulations! Your order has been successfully processed.</h1>
          <b>Our employees will contact you soon.</b>
        </div>
      </div>
    </section>
  );
}
export default Booking