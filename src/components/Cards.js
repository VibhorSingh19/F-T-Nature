import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bottle1.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Bamboo Bottles'
              path='/services'
            />
            <CardItem
              src='images/bottle2.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Bamboo Bottles'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bottle3.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Bamboo Bottles'
              path='/services'
            />
            <CardItem
              src='images/bottle4.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Bamboo Bottles'
              path='/products'
            />
            <CardItem
              src='images/bottle5.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Bamboo Bottles'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
