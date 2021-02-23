import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';

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

      <h1>LikeButton</h1>
      <LikeButton />
      <LikeButton />

  <ClickablePicture
    img='/img/persons/maxence.png'
    imgClicked='/img/persons/maxence-glasses.png'
      />
      <h1>Dice</h1>
      <Dice />
    
    </div>
  );
}



export default App;
