import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import CreditCard from './components/CreditCard';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
<h1>IdCard</h1>
  <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture='https://randomuser.me/api/portraits/men/44.jpg'
      />
      <IdCard    
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Marta</Greetings>
      <Greetings lang="en">Millie</Greetings>

      <h1>CreditCard</h1>
      <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />
  <CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222" />
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" />
      
      <h1>LikeButton</h1>
      <LikeButton />
      <LikeButton />

  <ClickablePicture
    img='/img/persons/maxence.png'
    imgClicked='/img/persons/maxence-glasses.png'
      />
      <h1>Dice</h1>
      <Dice />
    
      <h1>Carousel</h1>
      <Carousel
    imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
      />
      

    </div>
  );
}



export default App;
