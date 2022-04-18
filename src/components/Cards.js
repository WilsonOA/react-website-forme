import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations in Ghana!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Explore the way of life of ghanaians '
              label='Culture'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Travel through the country enjoying our beautiful tourist attractions'
              label='Tourism and Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-18.jpg'
              text='Enjoy the very best of Ghanaian art and music'
              label='Art industry'
              path='/services'
            />
            <CardItem
              src='images/img-15.jpg'
              text='Experience the best of ghanaian food and drinks'
              label='Ghanaian food'
              path='/products'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Visit sites rich in history that tell us of our past and ancestors'
              label='Experience History '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;