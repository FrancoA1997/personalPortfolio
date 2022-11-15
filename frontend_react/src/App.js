import React from 'react'
import { Header, Footer, Skills, Work, About} from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <h1 className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </h1>
  );
}

export default App;