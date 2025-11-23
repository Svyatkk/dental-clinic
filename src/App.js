import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import MenuButtons from './components/MenuButtons/MenuButtons';
import Button from './components/Button/Button';
import MainMenu from './components/MainMenu/MainMenu';
import BlockRecomendation from './components/BlockRecomendation/BlockRecomendation';
import Sidebar from './components/SideBar/Sidebar';
import Services from './components/Services/Services';
import Specialists from './components/Specialists/Specialists';
import Consultation from './components/Consultation/Consultation';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='App'>

      <>

        <Navbar>

        </Navbar>

        <Main>

          <MainMenu></MainMenu>



        </Main>


        <BlockRecomendation></BlockRecomendation>



      </>


      <Sidebar></Sidebar>


      <Services></Services>

      <Specialists></Specialists>

      <Consultation></Consultation>



      <Footer></Footer>

    </div >



  );
}

export default App;
