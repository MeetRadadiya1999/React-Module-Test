// Home.js
import React from 'react';
import Groups from './groups/Groups';
import Main from './main/Main';
import './home.css';

function Home() {
  return (
    <div className='home'>
      <Groups />
      <Main />
    </div>
  );
}

export default Home;
