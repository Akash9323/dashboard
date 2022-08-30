import React from 'react';
import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
const Home = () => {
  return (
    <div className="home">
       <Sidebar />
        <div className="homeContainer">
       <Navbar />
       <div className="widgets">
         <Widget type="users"/>
        <Widget  type="winners"/>
        <Widget  types="games"/>
        <Widget  types="luckyCoins"/>
       </div> 
       <div className='charts'>
        <Featured />
        <Chart />

       </div>
    </div>
    </div> 
  )
}

export default Home;